import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import CardUser from "../components/CardUser";

export default function Following() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <ProfileNavbar />
                <CardUser name="User1" image="https://www.w3schools.com/howto/img_avatar.png" />
                <CardUser name="User2" image="https://scme.mx/wp-content/uploads/2020/06/img_avatar2-2.png" />
            </Container>
        </Fragment>
    );
}