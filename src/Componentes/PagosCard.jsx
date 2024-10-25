import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PagosCard({metodo}) {
  return (
    <Card className='m-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body >
        <Card.Title>{metodo.nombreMetodo}</Card.Title>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{metodo.valor}</ListGroup.Item>
            <ListGroup.Item>{metodo.descripcion}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PagosCard;