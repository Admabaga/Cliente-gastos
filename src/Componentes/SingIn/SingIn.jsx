import { useContext, useState } from 'react';
import './SingIn.css'
import Axios from 'axios';
import NavBar from '../../Header/Nav';
import userContext from '../Contexto/userContext'
import { useNavigate } from 'react-router-dom';

function SingIn() {

    const [correo, setName] = useState('');
    const [password, setPassword] = useState('');
    const port = 8000
    const  {actualizarCuentaId} = useContext(userContext)
    const navegacion = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { correo, password };

        Axios.post(`http://localhost:${port}/usuarios/login`, data)
            .then(response => {
                console.log(response);
                actualizarCuentaId(response.data)
                navegacion('/lobby')
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
        <NavBar></NavBar>
            <div className="left">
                <h1 className='tittle'>INICIA SESIÓN CON NOSOTROS</h1>
                <p className="description">“Descubre mundos entre páginas: ¡Bienvenido a nuestra comunidad literaria!”</p>
                <form className="input-container" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Nombre' value={correo} onChange={(event) => { setName(event.target.value) }} />
                    <input type="password" placeholder='Contraseña' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    <button type='submit'>INICIAR</button>
                </form>
            </div>
        </>
    )
}

export default SingIn;