import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
/*import TypeBar from "../components/TypeBar";*/
import TypeBar from "../components/TypeBar";
import DeveloperBar from "../components/DeveloperBar";
import GameList from "../components/GameList";

const Shop = () => {
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