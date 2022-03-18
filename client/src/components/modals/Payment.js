import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createGame, createSale, fetchGameOrders, fetchGames,  fetchOrders} from "../../http/deviceAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const NameofPayment = ["Карта","Криптовалюта","Мобильный телефон"]
const CreatePayment = observer( ({show, onHide, onClick, ref}) => {

    const [name, setName] = useState('');
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Оплатить заказ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ name || "Выберите способ оплаты"}</Dropdown.Toggle>
                        <Dropdown.Menu>

                            {(NameofPayment || []).map((name,index)=>
                                <Dropdown.Item
                                    onClick={()=>setName(name)}
                                    key = {index}
                                >
                                    {name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onClick.bind(this,onHide)}>Оплатить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePayment;