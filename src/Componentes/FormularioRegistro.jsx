import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormularioRegistro() {
  return (
    <>
    <section className='formulario'>
      <Form.Floating >
        <Form.Control
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Ingresa tu nombre completo:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          type="number"
          placeholder="12345"
        />
        <label htmlFor="floatingInputCustom">Ingresa tu numero de cedula:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Ingresa tu correo electronico:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          type="number"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Ingresa tu numero de contacto:</label>
      </Form.Floating>

      <Form.Floating >
        <Form.Control
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Ingresa tu ciudad:</label>
      </Form.Floating>

      <Form.Floating>
        <Form.Control
          type="password"
          placeholder="Password:"
        />
        <label htmlFor="floatingPasswordCustom">Ingresa tu contraseña:</label>
      </Form.Floating>
      <Button variant="outline-secondary">Registrarse</Button>{' '}
      </section>
    </>
  );
}

export default FormularioRegistro;