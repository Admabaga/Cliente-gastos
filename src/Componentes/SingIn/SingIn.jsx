import { useContext, useState } from 'react';
import './SingIn.css'
import Axios from 'axios';
import userContext from '../Contexto/userContext'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Header/Nav';
function SingIn ({}) {

    const [correo, setCorreo] = useState ('');
    const [password, setPassword] = useState ('');
    const {actualizarCuentaId, actualizarEstadoNav} = useContext(userContext)
    const port = 8000

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const data = { correo, password };

        Axios.post(`http://localhost:${port}/usuarios/login`, data)
        .then(response => {
            console.log(response);
            const responseData = response.data
            actualizarEstadoNav(true)
            actualizarCuentaId(responseData)
            window.location.href= '/lobby'
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <>
        <NavBar></NavBar>
            <h1 className='tittle'>INICIA SESIÓN CON NOSOTROS</h1>
            <p className="description">“Descubre mundos entre páginas: ¡Bienvenido a nuestra comunidad literaria!”</p>
            <form className="input-container" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' value={correo} onChange={(event) => {setCorreo (event.target.value)}}/>
                <input type="password" placeholder='Contraseña' value={password} onChange= {(event) => {setPassword (event.target.value)}}/>
                <button type='submit'>INICIAR</button>
            </form>
        </>
    )
}

export default SingIn;