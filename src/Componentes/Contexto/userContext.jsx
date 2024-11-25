import React, { createContext, useEffect, useState } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [cuentaId, setCuentaId] = useState("")

  const storedcuentaId = JSON.parse(localStorage.getItem('cuentaId')) || cuentaId;
  setCuentaId(storedcuentaId)

  useEffect(() => {
    localStorage.setItem('cuentaId', JSON.stringify(cuentaId))
  }, [cuentaId])

  const actualizarCuentaId = (idActualizado) => {
    setCuentaId(idActualizado)
  }

  return (
    <userContext.Provider value={{ actualizarCuentaId, cuentaId }}>
      {children}
    </userContext.Provider>
  )
}
export default userContext