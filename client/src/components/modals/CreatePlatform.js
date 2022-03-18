import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createPlatform} from "../../http/deviceAPI";

const CreatePlatform = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addPlatform = ()=>{
        createPlatform({platform_name:value}).then(data => {
            setValue('')
            onHide()
        })

    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить платформу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите платформу"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPlatform}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePlatform;