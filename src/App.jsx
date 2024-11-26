import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Header/Nav.jsx'
import Banner from './Banner/Banner.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsuariosMain from './Componentes/UsuariosMain.jsx'
import GastosMain from './Componentes/GastosMain.jsx'
import MetodosMain from './Componentes/MetodosMain.jsx'
import { UserProvider } from './Componentes/Contexto/userContext.jsx'
import Lobby from './Componentes/lobby.jsx'
import Home from './Componentes/Home/Home.jsx'
import FormularioRegistro from './Componentes/FormularioRegistro.jsx'

function App() {
  return (
    <>
      <UserProvider>
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Banner />}></Route>
            <Route path='/registro' element={<FormularioRegistro />}></Route>
            <Route path='/login' element={<Home />}></Route>
            <Route path='/lobby/gastos' element={<GastosMain />}></Route>
            <Route path='/lobby/metodoPagos' element={<MetodosMain />}></Route>
            <Route path='/lobby' element={<Lobby />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <Footer></Footer>
    </>
  )
}

export default App
