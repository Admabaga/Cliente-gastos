import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioRegistro from './Componentes/FormularioRegistro'
import FormularioGastos from './Componentes/FormularioGasto'
import FormularioIngresos from './Componentes/FormularioLogin'
import FormularioCategoria from './Componentes/FormularioCategoria'
import NavBar from './Header/Nav.jsx'
import Banner from './Banner/Banner.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Banner/>}></Route>
      <Route path='/registroUsuario' element={<FormularioRegistro/>}></Route>
      <Route path='/registrarGasto' element={<FormularioGastos/>}></Route>
      <Route path='/registrarIngreso' element={<FormularioIngresos/>}></Route>
      <Route path='/registrarCategoria' element={<FormularioCategoria/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
