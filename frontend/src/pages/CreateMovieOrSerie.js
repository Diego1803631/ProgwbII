import React, { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { create } from "../api/MovieAPI";
import { getall as getCat } from "../api/CategoryAPI";
import { getall as getPla } from "../api/PlatformAPI";
import {useAuth0} from "../hooks/react-auth0-spa";

export default function CreateMovieSerie() {
    const {getTokenSilently} = useAuth0();
    const [category, setCategory] = useState([]);
    const [platform, setPlatform] = useState([]);
    useEffect(() => {
        getCat()
            .then(res => {
                console.log(res);
                setCategory(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        getPla()
            .then(res => {
                console.log(res);
                setPlatform(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        score: "5",
        image: "",
        cover: "",
        releasedate: "",
        episodes: "",
        category: "",
        platform: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getTokenSilently();
        await create(movie, token);
        alert("Registro exitoso.");
    }
    //const handleSubmit2 = async (e) => {
        //console.log(e.target.value);
    //}
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <Form onSubmit={handleSubmit}>
                    <div id="desc">
                        <h4 id="title">Registrar película o serie</h4>
                        <label>Banner</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="URL banner..."
                            value={movie.cover}
                            onChange={handleChange}
                            name="cover"
                        />
                        <label>Poster</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="URL poster..."
                            value={movie.image}
                            onChange={handleChange}
                            name="image"
                        />
                        <label>Título</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="Título"
                            value={movie.title}
                            onChange={handleChange}
                            name="title"
                        />
                        <label>Sinopsis</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="text"
                            placeholder="Sinopsis"
                            value={movie.description}
                            onChange={handleChange}
                            name="description"
                        />
                        <label>Fecha de lanzamiento</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="date"
                            placeholder="fecha de lanzamiento"
                            value={movie.releasedate}
                            onChange={handleChange}
                            name="releasedate"
                        />
                        <label>Numero de episodios</label>
                        <Form.Control
                            id="floatingDesc2Custom"
                            type="number"
                            placeholder="Numero de episodios"
                            value={movie.episodes}
                            onChange={handleChange}
                            name="episodes"
                        />
                        <label>Categoría</label>
                        <div>
                            <div id="dropdownCMS">
                                <Form.Select value={movie.category} onChange={handleChange} name="category">
                                    <option value="">...</option>
                                    {category.map(post => <option value={post._id} key={post._id}>{post.name}</option>)}
                                </Form.Select>
                            </div>
                        </div>
                        <label>Plataforma</label>
                        <div>
                            <div id="dropdownCMS">
                                <Form.Select value={movie.platform} onChange={handleChange} name="platform">
                                    <option value="">...</option>
                                    {platform.map(post => <option value={post._id} key={post._id}>{post.name}</option>)}
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container >
        </Fragment >
    );
}

//function cargaImagen() {
    //var inputFile = document.getElementById('floatingCoverCustom');
    //var image = document.getElementById('banner');
    //var reader = new FileReader();
    //inputFile.text = reader;
//}