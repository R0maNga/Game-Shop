import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateGame = ({show,onHide}) => {
    const {game} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo =()=>{
        setInfo ([...info,{title:'', description:'', number:Date.now()}])

    }
    const removeInfo =(number)=>{
        setInfo (info.filter(i=> i.number !==number))

    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите жанр </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.genres.map(genre =>
                                <Dropdown.Item key = {genre.id}>{genre.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите разработчика </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.developers.map(developer =>
                                <Dropdown.Item key = {developer.id}>{developer.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder = "Введите название игры"

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder = "Введите стоимомть игры"
                        type="number"

                    />
                    <Form.Control
                        className="mt-3"
                        type="file"

                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}

                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="введите название свойства"
                                />

                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите описание свойства"
                                />

                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={()=> removeInfo(i.number)}
                                    variant={"outline-danger"}>
                                    удалить

                                </Button>

                            </Col>

                        </Row>




                    )}



                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGame;