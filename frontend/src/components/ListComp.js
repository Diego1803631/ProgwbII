import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MdFormatListNumbered } from "react-icons/md";

const ListComp = (props) => {
    const id = props.id;
    const title = props.title;
    const description = props.description;
    const movie = props.movie;
    return (
        <div>
            <Card id="Follow" style={{ width: '18rem' }}>
                <Link id="linkcolor" to={{
                    pathname: '/ListInfo',
                    state: {
                        id: id,
                        title: title,
                        description: description,
                        movie: movie
                    }
                }}>
                    <Card.Body><MdFormatListNumbered /><p>{props.title}</p></Card.Body>
                </Link>
            </Card>
        </div>
    )
}

export default ListComp;