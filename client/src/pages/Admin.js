import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDeveloper from "../components/modals/CreateDeveloper";
import CreateGame from "../components/modals/CreateGame";
import CreateGenre from "../components/modals/CreateGenre";
import CreatePlatform from "../components/modals/CreatePlatform";
import CreateSale from "../components/modals/CreateSale";
import DeleteGame from "../components/modals/DeleteGame";
import DeleteGenre from "../components/modals/DeleteGenre";
import DeleteDeveloper from "../components/modals/DeleteDeveloper";

const Admin = () => {
    const [developerVisible, setDeveloperVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)
    const [platformVisible, setplatformVisible] = useState(false)
    const [saleVisible, setsaleVisible] = useState(false)
    const [delteGameVisible, setDeleteGameVisible] = useState(false)
    const [deleteGenreVisible, setDeleteGenreVisible] = useState(false)
    const [deleteDeveloperVisible, setDeleteDeveloperVisible] = useState(false)
    return (

         <Container className="d-flex flex-column">
             <Button
                 variant={"outline-success"}
                 className="mt-2"
                 onClick={()=> setGenreVisible(true)}
             >
                 Добавить жанр
             </Button>
             <Button
                 variant={"outline-success"}
                 className="mt-2"
                 onClick={()=> setDeveloperVisible(true)}
             >
                 Добавить разработчика</Button>

             <Button
                 variant={"outline-success"}
                 className="mt-2"
                 onClick={()=> setplatformVisible(true)}
             >
                 Добавить платформу</Button>
             <Button
                 variant={"outline-success"}
                 className="mt-2"
                 onClick={()=> setGameVisible(true)}
             >
                 Добавить игру</Button>
             <Button
                 variant={"outline-success"}
                 className="mt-2"
                 onClick={()=> setsaleVisible(true)}
             >
                 Добавить скидку</Button>
             <Button
                 variant={"outline-danger"}
                 className="mt-2"
                 onClick={()=> setDeleteGameVisible(true)}
             >
                 Удалить игру</Button>
             <Button
                 variant={"outline-danger"}
                 className="mt-2"
                 onClick={()=> setDeleteGenreVisible(true)}
             >
                 Удалить жанр</Button>
             <Button
                 variant={"outline-danger"}
                 className="mt-2"
                 onClick={()=> setDeleteDeveloperVisible(true)}
             >
                 Удалить разработчика</Button>

             <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
             <CreateDeveloper show={developerVisible} onHide={() => setDeveloperVisible(false)}/>
             <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
             <CreatePlatform show={platformVisible} onHide={() => setplatformVisible(false)}/>
             <CreateSale show={saleVisible} onHide={() => setsaleVisible(false)}/>
             <DeleteGame show={delteGameVisible} onHide={() => setDeleteGameVisible(false)}/>
             <DeleteGenre show={deleteGenreVisible} onHide={() => setDeleteGenreVisible(false)}/>
             <DeleteDeveloper show={deleteDeveloperVisible} onHide={() => setDeleteDeveloperVisible(false)}/>

         </Container>

    );
};

export default Admin;