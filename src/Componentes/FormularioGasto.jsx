import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormularioGastos() {
  return (
    <>
    <section className='formulario'>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Ingresa el nombre:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="12345"
        />
        <label htmlFor="floatingInputCustom">Ingresa el monto:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="date"
          placeholder="dd/mm/yyyy"
        />
        <label htmlFor="floatingInputCustom">Ingresa la fecha:</label>
      </Form.Floating>
      
      <Form.Floating >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form.Floating>
      <Button variant="outline-secondary">Ingresar gasto</Button>{' '}
      </section>
    </>
  );
}

export default FormularioGastos;