import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import GameItems from "./GameItems";
import {Row} from "react-bootstrap";

const GameList = observer(() => {
    const {game}= useContext(Context)
    return (
        <Row className="d-flex">
            {game.games.map(game =>
            <GameItems key={game.id} game={game}/>
            )}
            
        </Row>
    );
});

export default GameList;