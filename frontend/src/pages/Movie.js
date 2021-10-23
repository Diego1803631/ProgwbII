import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Review from "../components/Review";
import ReactStars from 'react-stars'
import { MdFavorite } from "react-icons/md";
import { MdMode } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Comment from "../components/Comment"

export default function Movie() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <Image id="banner" src="https://sm.ign.com/ign_es/gallery/d/dune-movie/dune-movie-images_vj82.jpg" fluid />
                <Image id="poster" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/denr9lw-2ceb9359-60d1-47f8-975a-802963088d4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVucjlsdy0yY2ViOTM1OS02MGQxLTQ3ZjgtOTc1YS04MDI5NjMwODhkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tdTbtAz_4gaRAUULq2dHWJM6NnbosnJAyoGDmfQeh0s" />
                <div id="desc">
                    <h4>Dune</h4><label id="label">Sinopsis</label>
                    <p>Arrakis, también denominado "Dune", se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.</p>
                    <div>
                        <MdFavorite id="likes" /><p>300</p>
                        <MdMode id="reviews" /><p>2</p>
                    </div>
                    <ReactStars id="stars" count={5} size={24} edit={0} color1={'#ffa534'} />
                    <div id="log">
                        <Button id="btnLike" variant="outline-danger">Like</Button><Button variant="outline-light" href="/CreateReview">Reseñar</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-light" id="dropdown-basic-agregarALista">
                                Agregar a lista
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Top peliculas 2020</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Top peliculas 2021</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <label id="label2">Reseñas hechas por los usuarios de List Factory</label>
                <hr className="hr"></hr>
                <Review name="User1" image="https://www.w3schools.com/howto/img_avatar.png" />
                <div class="comment">
                    <Comment id="comment" name="User2" image="https://scme.mx/wp-content/uploads/2020/06/img_avatar2-2.png" />
                </div>
                <Review name="User2" image="https://scme.mx/wp-content/uploads/2020/06/img_avatar2-2.png" />
                <div class="comment">
                    <Comment id="comment" name="User1" image="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
            </Container>
        </Fragment>
    );
}