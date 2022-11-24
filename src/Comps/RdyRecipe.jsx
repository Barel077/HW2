import { Col, Card, Button } from 'react-bootstrap';


export default function RdyRecipe(props) {



  return (
    <Col>
      <Card className="text-left" style={{ width: '18rem' }}>
        <Card.Header style={{ textAlign: 'Center', fontWeight: "bold", fontSize:"25px"}}>{props.inPrep.name}</Card.Header>
        <Card.Img variant="top" src={props.inPrep.image} />
        <Card.Body>
          <Card.Text>
            {props.inPrep.ingrediants}
            <br />
            {props.inPrep.cookingMethod}
            <br />
            {props.inPrep.time}
          </Card.Text>
          <Button onClick={() => props.rdyDishToPrep(props.inPrep)} variant="primary">Eat!</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}