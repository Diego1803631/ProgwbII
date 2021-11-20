import React from "react";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import ReactStars from 'react-stars'

const CardComp = (props) => {
    const id = props.id;
    const name = props.name;
    const img = props.img;
    const cover = props.cover;
    const desc = props.desc;
    const category = props.category;
    const platform = props.platform;
    const link = props.link;
    const score = props.score
    return (
        <div>
            <Card id="card" style={{ width: '15rem' }}>
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">{props.name}</Tooltip>}>
                    <Link to={{
                        pathname: '/Movie',
                        state: {
                            id: id,
                            name: name,
                            img: img,
                            cover: cover,
                            desc: desc,
                            category: category,
                            platform: platform,
                            link: link,
                            score: score
                        }
                    }}>
                        <Card.Img id="cardimg" variant="top" src={props.img} />
                    </Link >
                </OverlayTrigger>
                <Card.Title>
                    
                    <ReactStars id="stars" count={1} size={24} edit={0} color1={'#ffa534'} />
                    <label id="labelstar">{props.score}</label>
                </Card.Title>
            </Card>
        </div>
    )
}
export default CardComp;