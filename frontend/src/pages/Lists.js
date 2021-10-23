import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import ListComp from "../components/ListComp";

export default function Lists() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <ProfileNavbar />
                <ListComp title="Top películas 2021" total="5" />
                <ListComp title="Top películas 2020" total="10" />
            </Container>
        </Fragment>
    );
}