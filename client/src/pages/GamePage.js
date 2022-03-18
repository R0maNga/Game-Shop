import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Dropdown, Form, Image, Modal, Row} from "react-bootstrap";
import BigStar from '../assets/BigStar.svg'
import {useParams} from "react-router-dom";
import {
    createGame_Order,
    createOrder, createRate, createRating, createSale, fetchGameOrders, fetchGames,
    fetchOneGame, fetchOneRating, fetchOneRatingbyGame, fetchOneSale, fetchOrders, fetchRating, UpdateGame,

} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {BASKET_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'
import {values} from "mobx";


const Game = observer(({show, onHide}) => {
    /*const{game} = useContext(Context)*/
    const history = useHistory()
    const [game, setGame] = useState({info: []})
    const [gamesforrating, setGamesforrating] = useState({info: []})
    const [games, setGames] = useState({})
    const [orders, setOrders] = useState({})
    const [sale, setSales] = useState({})
    const [isRating, setIsRating] = useState(false)
    const [isRatingGame, setIsRatingGame] = useState(false)
    const [rating, setRating] = useState(0)
    const {id} = useParams()

    useEffect(() => {
        let a = localStorage.getItem('token')
        let userId = jwt_decode(a).id
        fetchOneGame(id).then(data => setGame(data))
        fetchOneGame(id).then(data => setGamesforrating(data))
        fetchGameOrders().then(data => setGames(data))
        fetchOrders().then(data => setOrders(data))
        fetchOneSale(id).then(data=>setSales(data))

        fetchOneRating(userId).then(data=>{
            data = data.filter(obj=>obj.gameId==id)
            console.log(!!data.length)
            data.length && setRating(data[0].rate)
            data.length && setIsRating(true)
        })


    }, [])

    const addNewProduct = async () => {

        const formData = new FormData()
        let a = localStorage.getItem('token')
        let b = jwt_decode(a)




        const filteredOrders = orders.filter(obj => obj.basketId === b.id);


        let sorrtedByIdGame = games.map(item => item.gameId)



        let a3 = sorrtedByIdGame.map((e, i) => e === game.id ? i : -1)
        let a4 = a3.filter(index => index !== -1) /*+1*/

        let filteredGameOrders = a4.map(element => element + 1) /*мы нашли все гейм ордеры где есть эта игра*/



        /* у меня есть айди геймордеров в которых есть айди данной игры по ним нужно получить айди ордера */
        let p = []
        for (let i = 0; i <= filteredGameOrders.length; i++) {
            games.forEach(obj => {
                if (obj.id === filteredGameOrders[i]) {
                    p.push(obj.orderId)
                }
            })
        }

        let final = []
        for (let i = 0; i <= p.length; i++) {
            orders.forEach(obj => {
                if (obj.id === p[i] && obj.basketId === b.id) {

                    final.push(obj.id)

                }
            })
        }
            console.log(final)
        if (final.length) {
            alert("игра уже добавлена ")
        } else {
            formData.append('basketId', b.id)
            formData.append('total_price', game.price)

            createOrder(formData).then(data => {
                let data2 = data.id
                formData.append('orderId', data2)
                formData.append('gameId', game.id)


                createGame_Order(formData).then(data => {
                    history.push(BASKET_ROUTE)
                    return onHide
                })
            })
        }
    }

    const addRate = async  ()=>
    {
        const formData1 = new FormData()
        let r = localStorage.getItem('token')
        let s = jwt_decode(r)


        formData1.append('gameId',gamesforrating.id)
        formData1.append('userId', s.id)

        formData1.append('rate', `${rating}`)


        createRate(formData1).then(data => {
            setIsRating(true)
            fetchRating().then(data=>{
                data= data.filter(obj=>obj.gameId==id)
                let totalRating = 0
                let count = 0
                data.forEach(obj=>{
                    totalRating+=obj.rate
                    count ++

                })
                totalRating=(totalRating/count).toFixed(2)
                formData1.append('rating',totalRating)
                formData1.append('id',id)
                UpdateGame(formData1).then(data=>onHide)

                console.log(data)
            })

        })

    }

const getPrice=()=>{

    let price = game.price;
    if(sale) {
        price = price - price*sale.sale_persent/100;
    }
return Math.round(price)
}




getPrice();
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + game.img}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>{game.name}</h2>

                        <div

                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${BigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}

                        >
                            {game.rating}
                        </div>
                    </div>
                    <div className="pl-5-5 col-auto w-100 mt-2 d-flex align-items-center">

                    <Form.Control
                        rating={rating}
                        onChange={e => {
                            if(e.target.value>=0 && e.target.value<=100) {
                                setRating(e.target.value)
                            }
                        }}
                        value={rating}
                        placeholder={"Введите рейтинг"}
                        disabled={isRating}
                    />
                        <Modal.Footer>
                            <Button disabled={isRating} variant="outline-success" onClick={addRate}>Добавить</Button>
                        </Modal.Footer>

                    </div>

                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{getPrice()}$</h3>
                        {sale && <h3>{game.price}$</h3>}

                        <Button onClick={addNewProduct} variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>

                </Col>
            </Row>


        </Container>
    );
},);

export default Game;