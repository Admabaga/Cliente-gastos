import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SingIn.css'
import Axios from 'axios';

function SingIn () {

    const [name, setName] = useState ('');
    const [password, setPassword] = useState ('');
    const port = 8000

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const data = { name, password };

        Axios.post(`http://localhost:${port}/usuarios/login`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <>
            <h1 className='tittle'>INICIA SESIÓN CON NOSOTROS</h1>
            <p className="description">“Descubre mundos entre páginas: ¡Bienvenido a nuestra comunidad literaria!”</p>
            <form className="input-container" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' value={name} onChange={(event) => {setName (event.target.value)}}/>
                <input type="password" placeholder='Contraseña' value={password} onChange= {(event) => {setPassword (event.target.value)}}/>
                <button type='submit'>INICIAR</button>
            </form>
        </>
    )
}

export default SingIn;