import React, {useContext, useEffect} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
/*import TypeBar from "../components/TypeBar";*/
import TypeBar from "../components/TypeBar";
import DeveloperBar from "../components/DeveloperBar";
import GameList from "../components/GameList";
import {Context} from "../index";
import {fetchDevelopers, fetchGames, fetchGenres} from "../http/deviceAPI";

const Shop = () => {
    const{game} = useContext(Context)
    useEffect(()=>{
        fetchGenres().then(data => game.setGenres(data))
        fetchDevelopers().then(data => game.setDevelopers(data))
        fetchGames().then(data => game.setGames(data.rows))

    },[])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                      <DeveloperBar/>
                      <GameList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;