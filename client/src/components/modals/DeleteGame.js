import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {
    deleteGame,

} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const DeleteGame = observer(({show,onHide}) => {

    const {game} = useContext(Context)
    const [platform, setPlatform] = useState(null)





    const DeleteGame = () =>{

        deleteGame(game.selectedGame.id).then(data =>
        {
            onHide()
    })

    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle> {game.selectedGame.name || "Выберите игру для удаления"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.games.map(genre =>
                                <Dropdown.Item
                                    onClick={()=> game.setSelectedGame(genre)}
                                    key = {genre.id}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={DeleteGame}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteGame;