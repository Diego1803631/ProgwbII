import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { create } from "../api/CategoryAPI";
import {useAuth0} from "../hooks/react-auth0-spa";

export default function CreateCategory() {
    const {getTokenSilently} = useAuth0();
    const [category, setCategory] = useState({
        name: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getTokenSilently();
        await create(category, token);
        alert("Categoría creada.");
    }
    return (
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear categoría</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Título"
                                value={category.name}
                                onChange={handleChange}
                                name="name"
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