import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

const CardUser = (props) => {
    return (
        <div>
            <Card id="Follow" style={{ width: '18rem' }}>
                <Card.Body><Image id="avatareview" src={props.image} /><p>{props.name}</p></Card.Body>
            </Card>
        </div>
    )
}

export default CardUser;