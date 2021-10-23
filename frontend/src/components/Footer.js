import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Footer = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <footer class="footer">
                <h6>¿Aún no tienes una cuenta?</h6><h6 href="#" onClick={()=>setModalShow(true)}>Registrate</h6>
                <small id="copy">© 2021 List Factory</small>
            </footer>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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

export default Footer;