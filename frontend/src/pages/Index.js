import React, { Fragment } from "react";
import CardComp from "../components/CardComp";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

export default function Index() {
    return (
        <Fragment>
                <Container id="ContainerMainPage">
                    <h4 id="title">Lo mas popular</h4><label id="label">Determinado por los usuarios de List Factory</label>
                    <CardGroup>
                        <CardComp name="Squid Game" img="https://bucket-img.tnlmedia.com/cabinet/files/consoles/2/teams/2/2021/9/ykvE14QMdpeEcShwkQr1T5H4IVTHV2dCVsXNCnuG.jpg" />
                        <CardComp name="Dune" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/denr9lw-2ceb9359-60d1-47f8-975a-802963088d4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVucjlsdy0yY2ViOTM1OS02MGQxLTQ3ZjgtOTc1YS04MDI5NjMwODhkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tdTbtAz_4gaRAUULq2dHWJM6NnbosnJAyoGDmfQeh0s" />
                        <CardComp name="The Green Knight" img="https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_52111.jpg" />
                        <CardComp name="No Time to Die" img="https://i.pinimg.com/originals/4e/a6/cb/4ea6cbe944924a9bf0599c6076670c42.jpg" />
                        <CardComp name="Alice in Borderland" img="https://es.web.img3.acsta.net/pictures/20/10/29/07/43/0901799.jpg" />
                        <CardComp name="The Suicide Squad" img="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/5NVN6IJQGVF4RIPHO63NCEMTA4.jpeg" />
                        <CardComp name="Sex Education" img="https://i0.wp.com/lacriaturacreativa.com/wp-content/uploads/2021/08/sex-education-posters-botanical-13.jpeg" />
                        <CardComp name="What if?" img="https://media.revistagq.com/photos/60e803fa54e0443ce59c7752/master/pass/what_if_marvel_xxlg.jpg" />
                        <CardComp name="Malignant" img="https://images.moviefit.me/t/o/384878-malignant.jpg" />
                        <CardComp name="The Last Duel" img="https://m.media-amazon.com/images/M/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
                    </CardGroup>
                </Container>
        </Fragment>
    );
}