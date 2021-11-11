import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import BigStar from '../assets/BigStar.svg'
const Game = () => {
    const game={id:1, name:"Silent Hill", price: 20, rating: 5, img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fpngs%2Fsilent-hill%2F&psig=AOvVaw1-pz-nCiRulkgzWiolSiBJ&ust=1636292580075000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiviYfvg_QCFQAAAAAdAAAAABAD'}

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={game.img}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>{game.name}</h2>
                        <div
                            className="d-flex align-items-center "
                            style={{background: `url(${BigStar}) no-repeat center center`, width:240,height:240, backgroundSize: 'cover', fontSize:64}}
                        >

                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize: 32, border:'5px solid lightgray'}}
                    >
                        <h3>{game.price}$</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>

                </Col>
            </Row>



        </Container>
    );
};

export default Game;