import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

const Comment = (props) => {
    return (
        <Card id="Review">
            <Card.Header><Image id="avatareview" src={props.image} /><p>{props.name}</p></Card.Header>
            <Card.Body>
                <p>En español por favor</p>
                <label id="label">22/10/21</label>
            </Card.Body>
        </Card>
        
    )
}

export default Comment;