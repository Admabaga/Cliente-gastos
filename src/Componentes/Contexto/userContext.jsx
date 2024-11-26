import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
const userContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [usuarioId, setUsuarioId] = useState(() => {
    // Inicializa desde el localStorage si hay un valor guardado
    const storedId = localStorage.getItem('cuentaId');
    return storedId ? JSON.parse(storedId) : "";
  });

  // Sincronizar usuarioId con el localStorage
  useEffect(() => {
    if (usuarioId !== "") {
      localStorage.setItem('cuentaId', JSON.stringify(usuarioId));
    } else {
      localStorage.removeItem('cuentaId'); // Limpia si está vacío
    }
  }, [usuarioId]);

  // Función para actualizar el usuarioId
  const actualizarCuentaId = (idActualizado) => {
    if (idActualizado !== usuarioId) {
      setUsuarioId(idActualizado);
    }
  };

  return (
    <userContext.Provider value={{ actualizarCuentaId, usuarioId }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
