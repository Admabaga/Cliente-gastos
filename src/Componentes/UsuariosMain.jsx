import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import FormularioRegistro from './FormularioRegistro';

function UsuariosMain() {
    const [infoMain, setInfoMain] = useState('')
    const cambiarMain = (valor)=>{
        setInfoMain(valor)
    }
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>cambiarMain('registro')}>Registrar usuario</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>cambiarMain('mostrar')} >Actualizar usuario</Nav.Link>
      </Nav.Item>
    </Nav>
    {infoMain === 'registro' &&  <FormularioRegistro />}
    </>
  );
}

export default UsuariosMain;