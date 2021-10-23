import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';

const MainNavbar = (props) => {
    return (
        <div>
            <Navbar id="MainNavbar" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">List Factory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#movies">Películas</Nav.Link>
                            <Nav.Link href="#series">Series</Nav.Link>
                        </Nav>
                        <FormControl
                            id="SearchBar"
                            placeholder="Buscar..."
                            aria-label="Search"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <a href="###"><MdSearch class="search-icon" /></a>
                        <div class="vertical"></div>
                        <Image id="avatar" src="https://i.pinimg.com/originals/6c/0f/56/6c0f56bbe60aa6c72f384215326a0ca3.jpg" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainNavbar;