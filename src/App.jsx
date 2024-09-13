import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioRegistro from './Componentes/FormularioRegistro'
import FormularioGastos from './Componentes/FormularioGasto'
import FormularioIngresos from './Componentes/FormularioLogin'
import FormularioCategoria from './Componentes/FormularioCategoria'
import Header from './Header/header.jsx'
import Banner from './Banner/Banner.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <Header></Header>
    <div className="tittle-container"><h1 className="tittle">BANNER</h1></div>
    <div className="banner"><Banner></Banner></div>
    <div className="footer">
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
