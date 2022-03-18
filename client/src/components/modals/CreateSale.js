import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createGame, createSale, fetchGameOrders, fetchGames,  fetchOrders} from "../../http/deviceAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateSale = observer( ({show, onHide}) => {
    const {game} = useContext(Context)
    const [value, setValue] = useState(0)
    const [games, setGames] = useState(null)


    const addSale = ()=>{
        const formData = new FormData()
        formData.append('gameId', game.selectedGame.id)
        formData.append('sale_persent',`${value}`)
        createSale(formData).then(data => onHide())



    }
    console.log(game.games)



    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить скидку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle> {game.selectedGame.name || "Выберите игру для скидки"} </Dropdown.Toggle>
                        <Dropdown.Menu>

                            {(game.games || []).map(gameObj=>
                                <Dropdown.Item
                                    onClick={()=> game.setSelectedGame(gameObj)}
                                    key = {game.id}
                                >
                                    {gameObj.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={value}
                        onChange={e => {
                            if(e.target.value>=0 && e.target.value<=100) {
                                setValue(e.target.value)
                            }
                        }}
                        placeholder={"Введите процент скидки"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addSale}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateSale;