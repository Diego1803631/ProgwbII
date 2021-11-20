import React, { Fragment, useState, useEffect } from "react";
import CardComp from "../components/CardComp";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { getallScore } from "../api/MovieAPI";
import { getbyUser } from "../api/LikesAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

export default function Index() {
    const { user: UserAuth } = useAuth0();
    const userId = UserAuth?.sub;
    const [movie, setMovie] = useState([]);
    const [likes, setLikes] = useState([]);
    useEffect(() => {
        getallScore()
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        getbyUser(userId)
            .then(res => {
                setLikes(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId]);
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <h4 id="title">Lo mas popular</h4><label id="label">Determinado por los usuarios de List Factory</label>
                <CardGroup>
                    {movie.map(post => <CardComp id={post._id} name={post.title} img={post.image}
                        score={post.score} cover={post.cover} desc={post.description} category={post.category.name} platform={post.platform.name} link={post.platform.link} like={likes} />)}
                </CardGroup>
            </Container>
        </Fragment>
    );
}