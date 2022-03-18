import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createGame, fetchDevelopers, fetchGames, fetchGenres, fetchPlatform} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateGame = observer(({show,onHide}) => {
    const {game} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [genre, setGenre] = useState(null)
    const [developer, setDeveloper] = useState(null)
    const [platform, setPlatform] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchGenres().then(data => game.setGenres(data))
        fetchDevelopers().then(data => game.setDevelopers(data))
        fetchPlatform().then(data=>game.setPlatforms(data))


    },[])

    const addInfo =()=>{
        setInfo ([...info,{title:'', description:'', number:Date.now()}])

    }
    const removeInfo =(number)=>{
        setInfo (info.filter(i=> i.number !==number))
    }
    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    const addGame = () =>{
        console.log(game.selectedGenre, game.selectedDeveloper,game.selectedPlatform)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('genreId', game.selectedGenre.id)
        formData.append('developerId', game.selectedDeveloper.id)
        formData.append('gamePlatformId', game.selectedPlatform.id)
        console.log(formData)
        createGame(formData).then(data => onHide())


    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle> {game.selectedGenre.name || "Выберите жанр"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.genres.map(genre =>
                                <Dropdown.Item
                                    onClick={()=> game.setSelectedGenre(genre)}
                                    key = {genre.id}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{game.selectedDeveloper.name || "Выберите разработчика"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.developers.map(developer =>
                                <Dropdown.Item
                                    onClick = {()=> game.setSelectedDeveloper(developer)}
                                    key={developer.id}
                                >
                                    {developer.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle> {game.selectedPlatform.platform_name|| "Выберите платформу"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.platforms.map(platform =>
                                <Dropdown.Item
                                    onClick={()=> game.setSelectedPlatform(platform)}
                                    key = {platform.id}
                                >
                                    {platform.platform_name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange = {e=> setName(e.target.value)}
                        className="mt-3"
                        placeholder = "Введите название игры"

                    />
                    <Form.Control
                        value={price}
                        onChange = {e=> setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder = "Введите стоимомть игры"
                        type="number"

                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}

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
                <Button variant="outline-success" onClick={addGame}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateGame;