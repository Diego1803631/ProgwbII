import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactStars from 'react-stars'
import { create } from "../api/CommentAPI";
import { getLast } from "../api/CommentAPI";
import { review_update } from "../api/ReviewAPI";
import { useAuth0 } from "../hooks/react-auth0-spa";

const Review = (props) => {
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <Card id="Review">
            <Card.Header><Image id="avatareview" src={props.image} /><p>{props.name}</p><label id="label">{props.date}</label></Card.Header>
            <Card.Body>
                <p>{props.content}</p>
                <ReactStars id="stars" count={props.score} size={24} edit={0} color1={'#ffa534'} />
                <Button id="btn_comentar" variant="outline-light" type="submit" onClick={() => setModalShow2(true)}>Comentar</Button>
            </Card.Body>

            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                id={props.id}
            />
        </Card>
    )
}

function MyVerticallyCenteredModal2(props) {
    const { getTokenSilently } = useAuth0();
    const { user: UserAuth } = useAuth0();
    const userId = UserAuth?.sub;
    const userAvatar = UserAuth?.picture;
    const userName = UserAuth?.name;
    const current = new Date();
    const reviewID = props.id;
    const date = current.getDate() + "/" + current.getMonth() + "/" + current.getFullYear();
    var [comment, setComment] = useState({
        content: "",
        date: "",
        user: "",
        avatar: "",
        username: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setComment({
            ...comment,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setComment({
            ...comment,
            date: date,
            user: userId,
            avatar: userAvatar,
            username: userName
        })
        comment = ({
            ...comment,
            date: date,
            user: userId,
            avatar: userAvatar,
            username: userName
        })
        const token = await getTokenSilently();
        await create(comment, token);
        var nose = [];
        await getLast()
            .then(res => {
                console.log("entra", res.data);
                nose = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        
        var commentID = nose.map(post => post._id);
        await review_update(reviewID, commentID[0]);
        alert("Comentario enviado.");
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton id="Modal1">
                <Modal.Title id="contained-modal-title-vcenter">
                    Comentario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="Modal">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingNombreCustom"
                                type="text"
                                placeholder="Comentario"
                                value={comment.content}
                                onChange={handleChange}
                                name="content"
                            />
                            <label htmlFor="floatingNombreCustom">Comentario</label>
                        </Form.Floating>
                    </Form.Group>

                    <Button id="btn_crearUsuario" variant="light" type="submit">Enviar comentario</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Review;