import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { MdBeenhere } from "react-icons/md";
import CardList from "../components/CardList";


export default function ListInfo() {
    return (
        <Fragment>
            <Container id="ContainerMainPage">
                <div id="profileinfo">
                    <Image id="profile" src="https://i.pinimg.com/originals/6c/0f/56/6c0f56bbe60aa6c72f384215326a0ca3.jpg" />
                    <p id="username">UserName <MdBeenhere /></p>
                    <Button className="btnSeguir" variant="light" href="/Profile">Ir al Perfil</Button>
                </div>
                <hr className="hr"></hr>
                <h6 id="listitle">Top películas 2021</h6><label id="label">5</label>
                <CardGroup>
                    <CardList num="1" name="Dune" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/denr9lw-2ceb9359-60d1-47f8-975a-802963088d4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVucjlsdy0yY2ViOTM1OS02MGQxLTQ3ZjgtOTc1YS04MDI5NjMwODhkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tdTbtAz_4gaRAUULq2dHWJM6NnbosnJAyoGDmfQeh0s" />
                    <CardList num="2" name="The Green Knight" img="https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_52111.jpg" />
                    <CardList num="3" name="No Time to Die" img="https://i.pinimg.com/originals/4e/a6/cb/4ea6cbe944924a9bf0599c6076670c42.jpg" />
                    <CardList num="4" name="Malignant" img="https://images.moviefit.me/t/o/384878-malignant.jpg" />
                    <CardList num="5" name="The Suicide Squad" img="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/5NVN6IJQGVF4RIPHO63NCEMTA4.jpeg" />
                </CardGroup>
                <Button id="btnEdit" variant="outline-light" href="/CreateList">Editar</Button>
            </Container>
        </Fragment>
    );
}