import React, { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import CardComp from "../components/CardComp";
import { getall } from "../api/CategoryAPI";
import { getallName } from "../api/MovieAPI";
import { getallScore } from "../api/MovieAPI";
import { getallDate } from "../api/MovieAPI";
import { getbyTitle } from "../api/MovieAPI";
import { moviebyCategory } from "../api/MovieAPI";

export default function Search() {
    const nombreBuscado = JSON.parse(localStorage.getItem('name'));
    const [posts, setPosts] = useState([]);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getall()
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        getbyTitle(nombreBuscado)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [nombreBuscado]);
    const handleName = () => {
        getallName()
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleDate = () => {
        getallDate()
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleRating = () => {
        getallScore()
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleCategory = async (e) => {
        const { name } = e.target;
        await moviebyCategory(name)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <Navbar id="LogNavbar" variant="dark" expand="lg">
                    <Container>
                        <Nav className="me-auto">
                            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                {posts.map(post => <NavDropdown.Item name={post._id} key={post._id} onClick={handleCategory}>{post.name}</NavDropdown.Item>)}
                            </NavDropdown>
                            <NavDropdown title="Ordenar por" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={handleName}>Nombre A-Z</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleDate}>Año</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleRating}>Rating</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
                <hr className="hr"></hr>
                <div>
                    <CardGroup>
                        {movie.map(post => <CardComp id={post._id} name={post.title} img={post.image} score={post.score} cover={post.cover} desc={post.description}
                            category={post.category.name} platform={post.platform.name} link={post.platform.link} />)}
                    </CardGroup>
                </div>
            </Container>
        </Fragment>
    );
}