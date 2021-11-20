import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CardList from "../components/CardList";
import ReactStars from 'react-stars';
import { useLocation } from "react-router";
import { create } from "../api/ReviewAPI";
import { updateScore } from "../api/MovieAPI";
import { getReviewbyMovie } from "../api/ReviewAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

export default function CreateMovieSerie() {
    const current = new Date();
    const date = current.getDate() + "/" + current.getMonth() + "/" + current.getFullYear();
    const { getTokenSilently } = useAuth0();
    const { user: UserAuth } = useAuth0();
    const userId = UserAuth?.sub;
    const userAvatar = UserAuth?.picture;
    const userName = UserAuth?.name;
    const location = useLocation();
    const { id, name, img } = location.state;
    const ratingChanged = (newRating) => {
        console.log(newRating)
        stars = newRating;
    }
    var stars = "";
    var [review, setReview] = useState({
        content: "",
        score: "",
        date: "",
        movie: "",
        comment: [],
        user: "",
        avatar: "",
        name: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setReview({
            ...review,
            score: stars,
            date: date,
            user: userId,
            movie: id,
            avatar: userAvatar,
            username: userName
        })
        review = ({
            ...review,
            score: stars,
            date: date,
            user: userId,
            movie: id,
            avatar: userAvatar,
            username: userName
        })
        const token = await getTokenSilently();
        await create(review, token);
        var nose2 = [];
        await getReviewbyMovie(id)
            .then(res => {
                nose2 = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        var scores = nose2.map(post => post.score);
        console.log(scores);
        var suma = 0;
        for (var i = 0; i < scores.length; i++) {
            suma += scores[i];
        }
        var prom = Math.round(suma / scores.length);
        console.log(prom);
        await updateScore(id, prom);

        alert("Reseña creada.");
    }
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear reseña</h4>
                <div id="cardReview">
                    <CardList name={name} img={img} />
                </div>
                <Form onSubmit={handleSubmit}>
                    <label id="label">Reseña</label>
                    <Form.Control
                        id="floatingDescCustom"
                        type="text"
                        placeholder="Reseña"
                        value={review.content}
                        onChange={handleChange}
                        name="content"
                    />
                    <label id="label">Califica</label>
                    <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffa534'} />
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </Fragment>
    );
}