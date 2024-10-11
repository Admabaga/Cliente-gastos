import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';
export default function VerMetodos(){
    
    const [metodos, setMetodos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerMetodos();
    }, []);

    const traerMetodos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/metodoPagos');
            if (Array.isArray(response.data)) {
                setMetodos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener metodos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setMetodos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerMetodos();
    };


    return(

            <div className="container mt-5">
            {cargando ? (
            <div className="spinner-container-list">
                <Spinner animation="border" size="lg" />
            </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Metodos de pago</h2>
                    <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Valor</th>
                            <th>Descripcion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {metodos.map((metodo, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{metodo.nombreMetodo}</td>
                              <td>{metodo.valor}</td> 
                              <td>{metodo.descripcion}</td>
                            </tr>
                          ))}
                        </tbody>
                    </Table>
                    {!metodos.length && <p>No se encontraron Metodos.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar' onClick={handleRefresh} >
                Refrescar
            </Button>
        </div>
    )
}