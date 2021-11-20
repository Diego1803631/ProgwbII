import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { create } from "../api/PlatformAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

export default function CreatePlatform() {
    const { getTokenSilently } = useAuth0();
    const [platform, setPlatform] = useState({
        name: "",
        link: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlatform({
            ...platform,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getTokenSilently();
        await create(platform, token);
        alert("Plataforma creada.");
    }
    return (
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Enlazar plataforma</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Nombre"
                                value={platform.name}
                                onChange={handleChange}
                                name="name"
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
                                value={platform.link}
                                onChange={handleChange}
                                name="link"
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