import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Review from "../components/Review";
import ReactStars from 'react-stars'
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Comment from "../components/Comment"
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { getReviewbyMovie } from "../api/ReviewAPI";
import { create } from "../api/LikesAPI";
import { getListbyUser } from "../api/ListAPI";
import { updateList } from "../api/ListAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

export default function Movie() {
    const { user: UserAuth } = useAuth0();
    const { getTokenSilently } = useAuth0();
    const userId = UserAuth?.sub;
    const location = useLocation();
    const { id, name, img, cover, desc, category, platform, score, link } = location.state;
    const idMovie = id;
    const nameMovie = name;
    const imgMovie = img;

    const [review, setReview] = useState([]);
    const handleReview = () => {
        console.log(idMovie);
        getReviewbyMovie(idMovie)
            .then(res => {
                console.log(res);
                setReview(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    var [like, setLike] = useState({
        user: "",
        movie: ""
    });
    const handleLike = async (e) => {
        setLike({
            ...like,
            user: userId,
            movie: idMovie
        })
        like = ({
            ...like,
            user: userId,
            movie: idMovie
        })
        const token = await getTokenSilently();
        await create(like, token);
        alert(nameMovie + " se ha guardado en tus likes.");
    }
    const [list, setList] = useState([]);
    const handleLists = async (e) => {
        getListbyUser(userId)
            .then(res => {
                console.log(res);
                setList(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleOption = async (e) => {
        const { name } = e.target;
        await updateList(name, id);
        alert(nameMovie + " agregada a la lista.");
    }

    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <Image id="banner" src={cover} fluid />
                <Image id="poster" src={img} />
                <div id="desc">
                    <h4>{name}</h4><label id="label">Sinopsis</label>
                    <p>{desc}</p>
                    <label id="label">Categoría</label>
                    <p>{category}</p>
                    <label id="label">Plataforma</label>
                    <a href={link}><p>{platform}</p></a>
                    <ReactStars id="stars" count={score} size={24} edit={0} color1={'#ffa534'} />
                    <div id="log">
                        <Button id="btnLike" variant="outline-danger" onClick={handleLike}>Like</Button>
                        <Link id="linkcolor" to={{
                            pathname: '/CreateReview',
                            state: {
                                id: idMovie,
                                name: nameMovie,
                                img: imgMovie
                            }
                        }}>
                            <Button variant="outline-light">Reseñar</Button>
                        </Link>
                        <Dropdown onClick={handleLists}>
                            <Dropdown.Toggle variant="outline-light" id="dropdown-basic-agregarALista">
                                Agregar a lista
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {list.map(post => <Dropdown.Item value={post._id} key={post._id} name={post._id} onClick={handleOption}>{post.title}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <hr id="nose" className="hr"></hr>
                <Button id="btnMostrar" variant="outline-light" onClick={handleReview}>Mostrar reseñas</Button>
                {review.map((post) =>
                    <div>
                        <Review id={post._id} name={post.username} image={post.avatar} content={post.content} score={post.score} date={post.date} />
                        {
                            post.comment.map(post => <div class="comment"><Comment id={post._id} user={post.user} name={post.username} image={post.avatar} content={post.content} date={post.date} /></div>)
                        }
                    </div>
                )}

            </Container>
        </Fragment>
    );
}