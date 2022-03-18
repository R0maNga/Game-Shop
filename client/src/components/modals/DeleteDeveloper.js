import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {
    deleteDeveloper,
    deleteGame, deleteGenre,

} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const DeleteDeveloper = observer(({show,onHide}) => {

    const {game} = useContext(Context)
    const [platform, setPlatform] = useState(null)





    const DeleteDeveloper = () =>{

        deleteDeveloper(game.selectedDeveloper.id).then(data =>
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
                    Удалить жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle> {game.selectedDeveloper.name || "Выберите разработчика для удаления"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.developers.map(genre =>
                                <Dropdown.Item
                                    onClick={()=> game.setSelectedDeveloper(genre)}
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
                <Button variant="outline-success" onClick={DeleteDeveloper}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDeveloper;