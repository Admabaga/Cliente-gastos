import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioCategoria from './Componentes/FormularioCategoria'
import NavBar from './Header/Nav.jsx'
import Banner from './Banner/Banner.jsx'
import Footer from './Footer/Footer.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import UsuariosMain from './Componentes/UsuariosMain.jsx'
import GastosMain from './Componentes/GastosMain.jsx'
import MetodosMain from './Componentes/MetodosMain.jsx'
import GastoCards from './Componentes/GastoCards.jsx'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Banner/>}></Route>
      <Route path='/usuarios' element={<UsuariosMain/>}></Route>
      <Route path='/gastos' element={<GastosMain/>}></Route>
      <Route path='/metodoPagos' element={<MetodosMain/>}></Route>
      <Route path='/categorias' element={<FormularioCategoria/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
