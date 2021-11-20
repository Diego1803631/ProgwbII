import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { create } from "../api/ListAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";
import { getbySpecificTitle } from "../api/MovieAPI";
//import CardComp from "../components/CardComp";

export default function CreateList() {
    const { user: UserAuth } = useAuth0();
    const { getTokenSilently } = useAuth0();
    const userId = UserAuth?.sub;
    var tempID = "";
    var tempTitle = "";
    const [movie, setMovie] = useState([]);
    const [myArray, updateMyArray] = useState([]);
    const [myArray2, updateMyArray2] = useState([]);
    const handleTitle = (e) => {
        getbySpecificTitle(e.target.value)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleArray = async (e) => {
        e.preventDefault();
        movie.map(post => tempID = post._id);
        updateMyArray(arr => [...arr, tempID]);
        movie.map(post => tempTitle = post.title);
        updateMyArray2(arr => [...arr, tempTitle]);
    }
    var [list, setList] = useState({
        title: "",
        description: "",
        user: "",
        movie: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setList({
            ...list,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        myArray.forEach((item, i) => {
            if (item === "") {
                alert("Búsqueda no encontrada");
            }
        });
        setList({
            ...list,
            user: userId,
            movie: myArray
        })
        list = ({
            ...list,
            user: userId,
            movie: myArray
        })
        const token = await getTokenSilently();
        await create(list, token);
        alert("Lista creada.");

    }
    return (
        <div>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear lista</h4>
                <div>
                    <Form onSubmit={handleArray}>
                        <div id="buscaImportar">
                            <FormControl
                                id="SearchBar3"
                                placeholder="Buscar película o serie..."
                                aria-label="Search"
                                aria-describedby="inputGroup-sizing-sm"
                                onChange={handleTitle}
                                name="search"
                            />
                            <Button variant="outline-light" type="submit">Añadir</Button>
                        </div>
                    </Form>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Título"
                                value={list.title}
                                onChange={handleChange}
                                name="title"
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
                                value={list.description}
                                onChange={handleChange}
                                name="description"
                            />
                            <label htmlFor="floatingdescCustom">Descripción</label>
                        </Form.Floating>
                    </Form.Group>
                    <ul>
                        {myArray2.map((item, i) =>
                            <li id="mlist" key={i}>{item}</li>
                        )}
                    </ul>
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </div >
    );
}