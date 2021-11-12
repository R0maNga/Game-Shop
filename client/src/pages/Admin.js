import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDeveloper from "../components/modals/CreateDeveloper";
import CreateGame from "../components/modals/CreateGame";
import CreateGenre from "../components/modals/CreateGenre";

const Admin = () => {
    const [developerVisible, setDeveloperVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)
    return (

         <Container className="d-flex flex-column">
             <Button
                 variant={"outline-dark"}
                 className="mt-2"
                 onClick={()=> setGenreVisible(true)}
             >
                 Добавить жанр
             </Button>
             <Button
                 variant={"outline-dark"}
                 className="mt-2"
                 onClick={()=> setDeveloperVisible(true)}
             >
                 Добавить разработчика</Button>
             <Button
                 variant={"outline-dark"}
                 className="mt-2"
                 onClick={()=> setGameVisible(true)}
             >
                 Добавить игру</Button>

             <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
             <CreateDeveloper show={developerVisible} onHide={() => setDeveloperVisible(false)}/>
             <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
         </Container>

    );
};

export default Admin;