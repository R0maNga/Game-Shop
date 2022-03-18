import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const DeveloperBar = observer(()  => {
    const {game}= useContext(Context)
    const selectDeveloper = (developer) => {
        if(game.selectedDeveloper.name===developer.name) {
            game.setSelectedDeveloper({})
        } else {
            game.setSelectedDeveloper(developer)
        }
    }
    return (
        <div className="d-flex flex-row" >
            {game.developers.map(developer =>
                <Card
                    style={{cursor:'pointer'}}
                    key={developer.id}
                    className="p-2"
                    onClick={selectDeveloper.bind(this, developer)}
                    border = {developer.id === game.selectedDeveloper.id ? 'danger':'light'}
                >
                    {developer.name}
                </Card>

            )}
        </div>
    );
});

export default DeveloperBar;