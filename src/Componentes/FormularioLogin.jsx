import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormularioIngresos() {
  return (
    <>
    <section className='formulario'>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Nombre del ingreso:</label>
      </Form.Floating>
      <Form.Floating >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form.Floating>
      <Button variant="outline-secondary">Registrar</Button>{' '}
      </section>
    </>
  );
}

export default FormularioIngresos;