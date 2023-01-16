import { useState } from "react";
import { Card, Col } from "react-bootstrap";

export default function Ingredient(props) {
    const [isDisabled, setDis] = useState(false);

    return (
        <Col>
            <Card className="text-left" style={{ width: '18rem', float: "left" }}>
                <Card.Header style={{ textAlign: 'Center', fontWeight: "bold", fontSize: "25px" }}>{props.item.name}</Card.Header>
                <Card.Img variant="top" src={props.item.image} style={{ maxHeight: "150px", width: "auto" }} />
                <Card.Body>
                    <Card.Text>
                        Calories:{props.item.cal}
                    </Card.Text>
                    <button disabled={isDisabled} onClick={() => { props.chosenIngs.push((props.item)); setDis(true) }} variant="primary">Add To Recipe</button>
                </Card.Body>
            </Card>
        </Col>
    )

}