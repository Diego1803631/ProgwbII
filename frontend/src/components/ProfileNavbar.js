import React from "react";
import { Image } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MdBeenhere } from "react-icons/md";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";


const ProfileNavbar = (props) => {
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <div>
            <div id="profileinfo">
                <Image id="profile" src="https://i.pinimg.com/originals/6c/0f/56/6c0f56bbe60aa6c72f384215326a0ca3.jpg" />
                <p id="username">UserName <MdBeenhere /></p>
                <Button className="btnSeguir" variant="light">Seguir</Button>
                <Button className="btnEditP" variant="light" onClick={() => setModalShow2(true)}>Editar</Button>
            </div>
            <Navbar id="LogNavbar" variant="dark" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/Profile">Likes</Nav.Link>
                        <Nav.Link href="/Lists">Listas</Nav.Link>
                        <Nav.Link href="/Following">Seguidos</Nav.Link>
                        <Nav.Link href="/Followers">Seguidores</Nav.Link>
                        <NavDropdown title="Opciones" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/CreateCategory">Nueva Categoría</NavDropdown.Item>
                                <NavDropdown.Item href="/CreatePlatform">Enlazar Plataforma</NavDropdown.Item>
                                <NavDropdown.Item href="/CreateList">Nueva Lista</NavDropdown.Item>
                                <NavDropdown.Item href="/CreateMovieOrSerie">Nueva Película/Serie</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <hr className="hr"></hr>
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </div>
    )
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
                    Editar perfil
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
                        <Image id="defaultImgProfile" src="https://i.pinimg.com/originals/6c/0f/56/6c0f56bbe60aa6c72f384215326a0ca3.jpg" roundedCircle />
                    </div>

                    <Button id="btn_crearUsuario" variant="light" type="submit">Confirmar cambios</Button>
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

export default ProfileNavbar;