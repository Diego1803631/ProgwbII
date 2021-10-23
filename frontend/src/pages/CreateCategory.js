import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function CreateCategory(){
    return(
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear categoría</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Título"
                            />
                            <label htmlFor="floatingInputCustom">Título</label>
                        </Form.Floating>
                    </Form.Group>
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </div>
    );
}