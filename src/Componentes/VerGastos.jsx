import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';

export default function VerGastos() {
    const [gastos, setGastos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerGastos();
    }, []);

    const traerGastos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/gastos');
            if (Array.isArray(response.data)) {
                setGastos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener gastos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setGastos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerGastos();
    };

    return (
        <div className="container mt-5">
            {cargando ? (
            <div className="spinner-container-list">
                <Spinner animation="border" size="lg" />
            </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Gastos</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Valor</th>
                                <th>Fecha</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gastos.map((gasto, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{gasto.nombre}</td>
                                    <td>{gasto.monto}</td>
                                    <td>{gasto.fecha}</td>
                                    <td>{gasto.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {!gastos.length && <p>No se encontraron gastos.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar'  onClick={handleRefresh} >
                Refrescar
            </Button>
        </div>
    );
}
