import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactStars from 'react-stars'

const Review = (props) => {
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <Card id="Review">
            <Card.Header><Image id="avatareview" src={props.image} /><p>{props.name}</p></Card.Header>
            <Card.Body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <label id="label">17/10/21</label>
                <ReactStars id="stars" count={5} size={24} edit={0} color1={'#ffa534'} />
                <Button id="btn_comentar" variant="outline-light" type="submit" onClick={() => setModalShow2(true)}>Comentar</Button>
            </Card.Body>

            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </Card>
        
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
                    Comentario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="Modal">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingNombreCustom"
                                type="text"
                                placeholder="Comentario"
                            />
                            <label htmlFor="floatingNombreCustom">Comentario</label>
                        </Form.Floating>
                    </Form.Group>

                    <Button id="btn_crearUsuario" variant="light" type="submit">Enviar comentario</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Review;