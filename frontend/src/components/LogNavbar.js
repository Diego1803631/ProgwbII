import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";

const LogNavbar = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <div>
            <Navbar id="LogNavbar" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">List Factory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Search">Películas</Nav.Link>
                            <Nav.Link href="/Search">Series</Nav.Link>
                        </Nav>
                        <FormControl
                            id="SearchBar"
                            placeholder="Buscar..."
                            aria-label="Search"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <a href="/Search"><MdSearch class="search-icon" /></a>
                        <Button className="btnEntrar" variant="light" onClick={() => setModalShow(true)}>Entrar</Button>{' '}
                        <Button className="btnRegistrate" variant="outline-light" onClick={() => setModalShow2(true)}>Registrate</Button>{' '}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </div>
    )
}
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton id="Modal1">
                <Modal.Title id="contained-modal-title-vcenter">
                    Iniciar Sesión
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="Modal">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="Correo Electrónico"
                            />
                            <label htmlFor="floatingInputCustom">Correo Electrónico</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Contraseña"
                            />
                            <label htmlFor="floatingPasswordCustom">Contraseña</label>
                        </Form.Floating>
                    </Form.Group>

                    <Button id="btn_crearUsuario" variant="light" type="submit" href="/Profile">Ingresar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function MyVerticallyCenteredModal2(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton id="Modal1">
                <Modal.Title id="contained-modal-title-vcenter">
                    Registrarse
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="Modal">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingNombreCustom"
                                type="text"
                                placeholder="Nombre"
                            />
                            <label htmlFor="floatingNombreCustom">Nombre</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingApellidosCustom"
                                type="text"
                                placeholder="Apellidos"
                            />
                            <label htmlFor="floatingApellidosCustom">Apellidos</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="Correo Electrónico"
                            />
                            <label htmlFor="floatingInputCustom">Correo Electrónico</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Contraseña"
                            />
                            <label htmlFor="floatingPasswordCustom">Contraseña</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Floating>
                            <Form.Control
                                id="floatingPassword2Custom"
                                type="password"
                                placeholder="Confirmar contraseña"
                            />
                            <label htmlFor="floatingPassword2Custom">Confirmar contraseña</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingDescCustom"
                                type="text"
                                placeholder="Descripcion"
                            />
                            <label htmlFor="floatingDescCustom">Descripcion</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingImgCustom"
                                type="file"
                                placeholder="Imagen de perfil"
                                onClick = {() => cargaImagen()}
                            />
                        </Form.Floating>
                    </Form.Group>
                    <div>
                        <Image id="defaultImgProfile" src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png" roundedCircle />
                    </div>

                    <Button id="btn_crearUsuario" variant="light" type="submit">Registrarse</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function cargaImagen(){
    var inputFile = document.getElementById('floatingImgCustom');

    var reader = new FileReader();
    inputFile.text = reader;
}


export default LogNavbar;