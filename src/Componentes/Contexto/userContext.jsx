import React, { createContext, useState, useEffect } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [cuentaId, setCuentaId] = useState("")
  const [estadoNav, setEstadoNav] = useState(false)

  useEffect(() => {
    if (cuentaId !== "") {
      localStorage.setItem('cuentaId', JSON.stringify(cuentaId))
    }
    localStorage.setItem('estadoNav', JSON.stringify(estadoNav))
  }, [cuentaId, estadoNav])

  const actualizarCuentaId = (idActualizado) => {
    if (idActualizado !== cuentaId) {
      setCuentaId(idActualizado);
    }
  };
  const actualizarEstadoNav = (estado) => {
    if (estado !== estadoNav) {
      setEstadoNav(estado);
    }
  };


  return (
    <userContext.Provider value={{ actualizarCuentaId, cuentaId, actualizarEstadoNav, estadoNav }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
