import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormularioIngresos from '../Componentes/FormularioLogin'
import FormularioRegistro from '../Componentes/FormularioRegistro'
import FormularioCategoria from '../Componentes/FormularioCategoria'
import FormularioGastos from '../Componentes/FormularioGasto'

function NavBar(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Control Gatos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/registroUsuario">Registro</Nav.Link>
            <Nav.Link href="/registrarIngreso">Ingresos</Nav.Link>
            <Nav.Link href="/registrarCategoria">Categorias</Nav.Link>
            <Nav.Link href="/registrarGasto">Gastos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;