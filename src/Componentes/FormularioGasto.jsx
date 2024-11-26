import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function FormularioGastos() {
  const [nombreGasto, setNombreGasto] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [respuestaError, setRespuestaError] = useState(false);
  const [cargando, setCargando] = useState(false);

  // Obtén el valor de cuentaId del localStorage
  const cuenta = localStorage.getItem('cuentaId') 
    ? JSON.parse(localStorage.getItem('cuentaId')) 
    : null;

  // Manejo de envío del formulario
  async function Enviar(event) {
    event.preventDefault();

    // Verifica si cuentaId existe
    if (!cuenta) {
      setRespuesta('Error: No se encontró un ID de cuenta válido en el almacenamiento local.');
      setRespuestaError(true);
      return;
    }

    setCargando(true);
    try {
      const response = await axios.post(`http://localhost:8000/gastos/${cuenta}`, {
        nombre: nombreGasto,
        monto: monto,
        fecha: fecha,
        descripcion: descripcion,
        usuarioId: cuenta,
      });

      setRespuesta('Gasto registrado correctamente!');
      setRespuestaError(false);
    } catch (error) {
      setRespuesta(`Error al registrar gasto: ${error.response?.data || error.message}`);
      setRespuestaError(true);
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="container my-5">
      <section className="formulario p-4 border rounded">
        <Form.Floating>
          <Form.Control
            id="nombreGasto"
            type="text"
            placeholder="Nombre del gasto"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
          <label htmlFor="nombreGasto">Nombre:</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="monto"
            type="number"
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <label htmlFor="monto">Monto:</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            id="fecha"
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <label htmlFor="fecha">Fecha:</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
        </Form.Floating>

        <Button variant="outline-secondary" onClick={Enviar}>
          Ingresar gasto
        </Button>{' '}

        {cargando ? (
          <div className="spinner-container">
            <Spinner animation="border" size="lg" />
          </div>
        ) : (
          respuesta && (
            <p className={`respuestaServer ${respuestaError ? 'error' : 'success'}`}>
              {respuesta}
            </p>
          )
        )}
      </section>
    </div>
  );
}

export default FormularioGastos;
