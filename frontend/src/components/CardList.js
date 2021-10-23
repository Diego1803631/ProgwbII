import React from "react";
import { Card } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const CardList = (props) => {
    return (
        <div>
            <Card id="card" style={{ width: '15rem' }}>
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">{props.name}</Tooltip>}>
                    <a href="/Movie"><Card.Img id="cardimg" variant="top" src={props.img} /></a>
                </OverlayTrigger>
                <Card.Title>
                <label id="label">{props.num}</label>
                </Card.Title>
            </Card>
        </div>
    )
}
export default CardList;