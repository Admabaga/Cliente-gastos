import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormularioIngresos from '../Componentes/FormularioLogin'
import FormularioRegistro from '../Componentes/FormularioRegistro'
import FormularioCategoria from '../Componentes/FormularioCategoria'
import FormularioGastos from '../Componentes/FormularioGasto'

function header(){
  const [mostrarMain, setMostrarMain] = useState('')


  const cambiarAIngresos= ()=>{
    setMostrarMain('ingreso')
  }
  const cambiarACategorias= ()=>{
    setMostrarMain('categoria')
  }
  const cambiarARegistro= ()=>{
    setMostrarMain('registro')
  }
  const cambiarAGasto= ()=>{
    setMostrarMain('gasto')
  }
 
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Budget</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" onClick={cambiarARegistro}>Register</Nav.Link>
            <Nav.Link onClick={cambiarAIngresos}>Ingresos</Nav.Link>
            <Nav.Link onClick={cambiarACategorias}>Categorias</Nav.Link>
            <Nav.Link onClick={cambiarAGasto}>Gastos</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <section className='mainInfo'>
        {mostrarMain === 'registro' && <FormularioRegistro></FormularioRegistro>}
        {mostrarMain === 'ingreso' && <FormularioIngresos></FormularioIngresos>}
        {mostrarMain === 'categoria' && <FormularioCategoria></FormularioCategoria>}
        {mostrarMain === 'gasto' && <FormularioGastos></FormularioGastos>}
      </section>
    </>
  );
}

export default header;