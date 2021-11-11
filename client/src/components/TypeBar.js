import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index"



const TypeBar = observer(() => {
    const {game} = useContext(Context)

    return (
        <ul className="list-group">
            {game.genres.map(genre =>

                 <li className={genre.id === game.selectedGenre.id ? "list-group-item active" : "list-group-item"}
                           style={{cursor:"pointer"}}
                           /*active={genre.id === game.selectedGenre.id}*/
                           onClick={() => game.setSelectedGenre(genre)}
                           key={genre.id}
                >
                    {genre.name}
                </li>


            )}
        </ul>
    );
});

export default TypeBar;