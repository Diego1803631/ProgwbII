import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import defaultCover from "../extras/Default_cover.jpg";
import defaultPoster from "../extras/Default_poster.jpg";

export default function CreateMovieSerie() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <Form>
                    <Image id="banner" src={defaultCover} fluid />
                    <Image id="poster" src={defaultPoster} />
                    <div id="desc">
                        <h4 id="title">Registrar película o serie</h4>
                        <label>Examinar banner</label>
                        <Form.Control
                            id="floatingCoverCustom"
                            type="file"
                            placeholder="Examinar banner..."
                            onClick = {() => cargaImagen()}
                        />
                        <label>Examinar poster</label>
                        <Form.Control
                            id="floatingPosterCustom"
                            type="file"
                            placeholder="Examinar banner..."
                            onClick = {() => cargaImagen()}
                        />
                        <label>Título</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="Título"
                        />
                        <label>Sinopsis</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="Sinopsis"
                        />
                        <label id="lblnocabe">Fecha de lanzamiento</label>
                        <Form.Control
                            id="floatingDesc3Custom"
                            type="date"
                            placeholder="fecha de lanzamiento"
                        />
                        <label id="lblnocabe">Numero de episodios</label>
                        <Form.Control
                            id="floatingDesc3Custom"
                            type="number"
                            placeholder="Numero de episodios"
                        />
                        <label id="lblnocabe">Categoría</label>
                        <div>
                            <div id="dropdownCMS">
                                <Form.Control
                                    id="floatingDesc4Custom"
                                    type="text"
                                    placeholder="Categoría"
                                />
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                        Categoría
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Acción</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Terror</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Comedia</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Documental</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <label id="lblnocabe">Plataforma</label>
                        <div>
                            <div id="dropdownCMS">
                                <Form.Control
                                    id="floatingDesc4Custom"
                                    type="text"
                                    placeholder="Plataforma"
                                />
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                        Plataformas
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Netflix</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">HBOMAX</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Amazon Prime Video</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Paramount+</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Disney+</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </Fragment>
    );
}

function cargaImagen(){
    var inputFile = document.getElementById('floatingCoverCustom');
    var image = document.getElementById('banner');
    var reader = new FileReader();
    inputFile.text = reader;
}