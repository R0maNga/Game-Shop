import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import GameItems from "./GameItems";
import {Row} from "react-bootstrap";

const GameList = observer(() => {
    const {game} = useContext(Context)
    console.log(game.games)
    return (
        <Row className="d-flex">
            {game.games.map(game => {
                    console.log(game)
                    return <GameItems key={game.id} game={game}/>

                }
            )}

        </Row>
    );
});

export default GameList;