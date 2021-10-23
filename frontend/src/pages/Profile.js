import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import ProfileNavbar from "../components/ProfileNavbar";
import CardComp from "../components/CardComp";


export default function Profile() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <ProfileNavbar />
                <CardGroup>
                    <CardComp name="Dune" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/denr9lw-2ceb9359-60d1-47f8-975a-802963088d4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVucjlsdy0yY2ViOTM1OS02MGQxLTQ3ZjgtOTc1YS04MDI5NjMwODhkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tdTbtAz_4gaRAUULq2dHWJM6NnbosnJAyoGDmfQeh0s" />
                </CardGroup>
            </Container>
        </Fragment>
    );
}