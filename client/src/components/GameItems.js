import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Star from '../assets/Star.svg'
import {useHistory} from "react-router-dom"
import {GAME_ROUTE} from "../utils/consts";

const GameItems = ({game}) => {
    const history= useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={()=>history.push(GAME_ROUTE + '/' + game.id)}>
              <Card style = {{width:150, cursor: 'pointer'}} border={"light"}>
                   <Image width={150} height={150} src={game.img} />
                   <div className="mt-1 d-flex justify-content-between align-items-center">
                       <div>{game.name}</div>
                       <div className="d-flex align-items-center">
                           <div>{game.rating}</div>
                           <Image width={18} height={18} src={Star}/>
                       </div>

                   </div>

              </Card>
        </Col>
    );
};

export default GameItems;