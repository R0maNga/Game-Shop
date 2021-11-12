import React, {useEffect} from 'react';
import {Button, Form, Modal} from "react-bootstrap";


const CreateDeveloper = ({show, onHide}) => {
    useEffect(()=>{
        console.log(1)
    },[])
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить разработчика
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        /*value={value}
                        onChange={e => setValue(e.target.value)}*/
                        placeholder={"Введите имя разработчика"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDeveloper;