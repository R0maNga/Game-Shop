import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index"



const TypeBar = observer(() => {
    const {game} = useContext(Context)
    const selectGenre = (genre) => {
        if(game.selectedGenre.name===genre.name) {
            game.setSelectedGenre({})
        } else {
            game.setSelectedGenre(genre)
        }
    }
    return (
        <ul className="list-group">
            {game.genres.map(genre =>

                 <li className={genre.id === game.selectedGenre.id ? "list-group-item active" : "list-group-item"}
                           style={{cursor:"pointer"}}
                           active={genre.id === game.selectedGenre.id}
                           onClick={selectGenre.bind(this, genre)}
                           key={genre.id}
                >
                    {genre.name}
                </li>


            )}
        </ul>
    );
});

export default TypeBar;