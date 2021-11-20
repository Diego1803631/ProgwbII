import React from "react";
import { Card } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { updateListMovie } from "../api/ListAPI";

const CardList = (props) => {
    const handleDelete = async (e) => {
        console.log(props.idlista, props.id);
        await updateListMovie(props.idlista, props.id);
        alert(props.name + " fue eliminada de la lista.")
    }
    return (
        <div>
            <Card id="card" style={{ width: '15rem' }}>
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">{props.name}</Tooltip>}>
                    <Card.Img id="cardimg" variant="top" src={props.img} />
                </OverlayTrigger>
                <Card.Body>
                    <TiDelete id="x" onClick={handleDelete} />
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardList;