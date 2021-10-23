import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function CreateList(){
    return(
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear lista</h4>
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
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Floating>
                            <Form.Control
                                id="floatingdescCustom"
                                type="text"
                                placeholder="Descripción"
                            />
                            <label htmlFor="floatingdescCustom">Descripción</label>
                        </Form.Floating>
                    </Form.Group>

                    <div>
                        <div id="buscaImportar">
                            <FormControl
                                id="SearchBar3"
                                placeholder="Buscar pelicula o serie..."
                                aria-label="Search"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <Button variant="outline-light">Añadir</Button>
                        </div>
                    </div>

                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </div>
    );
}