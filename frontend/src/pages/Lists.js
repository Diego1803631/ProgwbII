import React, { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import ListComp from "../components/ListComp";
import { getListbyUser } from "../api/ListAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

export default function Lists() {
    const { user: UserAuth } = useAuth0();
    const userId = UserAuth?.sub;
    const [list, setList] = useState([]);
    useEffect(() => {
        getListbyUser(userId)
            .then(res => {
                console.log(res);
                setList(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId]);
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <ProfileNavbar />
                {list.map(post => <ListComp id={post._id} title={post.title} description={post.description} user={post.user} movie ={post.movie} />)}
            </Container>
        </Fragment>
    );
}