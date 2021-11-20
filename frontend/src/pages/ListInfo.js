import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { MdBeenhere } from "react-icons/md";
import CardList from "../components/CardList";
import { useAuth0 } from "../hooks/react-auth0-spa";
import { useLocation } from "react-router";


export default function ListInfo() {
    const location = useLocation();
    const { title, description, movie, id } = location.state;
    const { user } = useAuth0();
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <div id="profileinfo">
                    <Image id="profile" src={user?.picture} />
                    <p id="username">{user?.name} <MdBeenhere /></p>
                    <Button className="btnSeguir" variant="light" href="/Profile">Ir al Perfil</Button>
                </div>
                <hr className="hr"></hr>
                <h6 id="listitle">{title}</h6>
                <label id="label">{description}</label>
                <CardGroup>
                    {movie.map(post => <CardList idlista={id} id={post._id} name={post.title} img={post.image} />)}
                </CardGroup>
            </Container>
        </Fragment>
    );
}