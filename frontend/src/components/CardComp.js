import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import Heart from "react-animated-heart";
import ReactStars from 'react-stars'

const CardComp = (props) => {
    const [isClick, setClick] = useState(false);
    return (
        <div>
            <Card id="card" style={{ width: '15rem' }}>
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">{props.name}</Tooltip>}>
                    <a href="/Movie"><Card.Img id="cardimg" variant="top" src={props.img} /></a>
                </OverlayTrigger>
                <Card.Title>
                    <ReactStars id="stars" count={5} size={24} edit={0} color1={'#ffa534'}/>
                    <div id="heart"><Heart isClick={isClick} onClick={() => setClick(!isClick)} /></div>
                </Card.Title>
            </Card>
        </div>
    )
}
export default CardComp;