import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function CreatePlatform(){
    return(
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Enlazar plataforma</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Nombre"
                            />
                            <label htmlFor="floatingInputCustom">Nombre</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Enlace"
                            />
                            <label htmlFor="floatingInputCustom">Enlace</label>
                        </Form.Floating>
                    </Form.Group>
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Enlazar</Button>
                </Form>
            </Container>
        </div>
    );
}