import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

const Comment = (props) => {
    return (
        <Card id="Review">
            <Card.Header><Image id="avatareview" src={props.image} /><p>{props.name}</p></Card.Header>
            <Card.Body>
                <p>{props.content}</p>
                <label id="label">{props.date}</label>
            </Card.Body>
        </Card>
        
    )
}

export default Comment;