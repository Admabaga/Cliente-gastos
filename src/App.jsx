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
        <div className="banner"><Banner></Banner></div>
    <Header></Header>

    <div className="footer">
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
