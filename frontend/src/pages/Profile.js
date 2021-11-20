import React, { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import CardLike from "../components/CardLike";
import { useAuth0 } from "../hooks/react-auth0-spa";
import { getbyUser } from "../api/LikesAPI";

export default function Profile() {
    const { user: UserAuth } = useAuth0();
    const userId = UserAuth?.sub;
    const [likes, setLikes] = useState([]);
    useEffect(() => {
        getbyUser(userId)
            .then(res => {
                console.log(res);
                setLikes(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId]);
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <ProfileNavbar />
                <CardGroup>
                    {likes.map(post => <CardLike id={post._id} idmovie={post.movie._id} name={post.movie.title} img={post.movie.image} />)}
                </CardGroup>
            </Container>
        </Fragment>
    );
}