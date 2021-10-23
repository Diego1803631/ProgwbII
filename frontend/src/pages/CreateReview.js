import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CardComp from "../components/CardComp";
import ReactStars from 'react-stars';

export default function CreateMovieSerie() {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <h4 id="title">Crear reseña</h4>
                <div id="cardReview">
                    <CardComp name="Dune" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/denr9lw-2ceb9359-60d1-47f8-975a-802963088d4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVucjlsdy0yY2ViOTM1OS02MGQxLTQ3ZjgtOTc1YS04MDI5NjMwODhkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tdTbtAz_4gaRAUULq2dHWJM6NnbosnJAyoGDmfQeh0s" />
                </div>
                <Form>
                    <label id="label">Reseña</label>
                    <Form.Control
                        id="floatingDescCustom"
                        type="text"
                        placeholder="Reseña"
                    />
                    <label id="label">Califica</label>
                    <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffa534'}/>
                    <Button id="btn_crearMovieSerie" variant="light" type="submit">Crear</Button>
                </Form>
            </Container>
        </Fragment>
    );
}