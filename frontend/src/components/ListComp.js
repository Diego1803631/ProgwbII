import React from "react";
import { Card } from "react-bootstrap";
import { MdFormatListNumbered } from "react-icons/md";

const ListComp = (props) => {
    return (
        <div>
            <Card id="Follow" style={{ width: '18rem' }}>
                <a id="linkcolor" href="/ListInfo">
                    <Card.Body><MdFormatListNumbered /><label id="label">{props.total}</label><p>{props.title}</p></Card.Body>
                </a>
            </Card>
        </div>
    )
}

export default ListComp;