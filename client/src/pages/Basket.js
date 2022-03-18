import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    createGame_Order,
    createOrder,
    createPay, deleteOrder,
    fetchGameOrders,

    fetchOneOrder, fetchOrders
} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import {Button, Row} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import GameItems from "../components/GameItems";
import {Context} from "../index";
import CreatePayment from "../components/modals/Payment";
import CreateGame from "../components/modals/CreateGame";


const Basket = observer(({show, onHide}) => {
    const {game}= useContext(Context)

    const modalRef = useRef(null);

    const formData = new FormData()
    const [order, setOrder] = useState([])
    const [games, setGames] = useState([])
    const [gamesInBasket, setGamesInBasket] = useState([])
    const [totalPrice,setTotalPrice] = useState([])
    const [ordersInBasket,setOrdersInBasket] = useState([])
    const [paymentVisible, setPaymentVisible] = useState(false)

    useEffect(() => {
        fetchGameOrders().then(data => setGames(data))
        fetchOrders().then(data => setOrder(data))
    }, [])

    useEffect(()=>{
        let d = []
        let a = localStorage.getItem('token')
        let b = jwt_decode(a)
        const filteredOrders = order.filter(obj => obj.basketId === b.id);
        games.forEach(id => {
            filteredOrders.forEach(obj => {

                if (obj.id === id.orderId) {
                    d.push(id)
                }

            })


        })
        console.log(d,"гейм ордеры")
        setOrdersInBasket(d);
        console.log(d.map(obj=>obj.orderId))
        const d2 = []
        let total_price = 0
        game.games.forEach(id => {
            d.forEach(obj => {

                if (obj.gameId === id.id) {
                    total_price += +id.price;
                    d2.push(id)
                }

            })


        })
        setTotalPrice(total_price)
        setGamesInBasket(d2);
    },[games, order])
    const makeOrder = async () => {
        if(document.querySelector('.dropdown-toggle').innerText === 'Выберите способ оплаты') {
            alert('Выберите способ оплаты')
            return
        }
        let a = localStorage.getItem('token')
        let b = jwt_decode(a)


        /*console.log(order.map(id=>id.id))
        console.log(games.map(item=>item.orderId))*/
        const filteredOrders = order.filter(obj => obj.basketId === b.id);
        const ds = filteredOrders.map(item => item.id)

        const filtreGameOrders = games.map(obj => obj.orderId === filteredOrders)





        if (games.map(item => item.orderId === order.map(id => id.id))) {


            let a = games.map(item => item.orderId)

            let c = order.filter(item => item.basketId === b.id)

            let d = []
            a.forEach(id => {
                const order = c.filter(obj => {

                    return obj.id === id
                })

                d = d.concat(order)


            })


            if (d.every(item => item.basketId = b.id)) {
                formData.append('basketId', b.id)
                createOrder(formData).then(data => {


                    let total_price = 0
                    console.log(d)

                    d.forEach(data => {
                        total_price += +data.total_price
                        console.log(data.total_price)
                    })

                    console.log(total_price)

                    formData.append('total_price', total_price)
                    formData.append('orderId', data.id)
                    formData.append('name_of_payment', document.querySelector('.dropdown-toggle').innerText)
                    createPay(formData).then(data => {
                        ordersInBasket.forEach(obj=>{
                            deleteOrder(obj.orderId).then(()=>{
                                fetchGameOrders().then(data => setGames(data))
                                fetchOrders().then(data => setOrder(data))
                                setPaymentVisible(false)
                            }).then(()=>alert('Заказ успешно оплачен'))
                        })
                    }).then(()=>onHide)

                })


            }
        }

    }

    const deleteGame = (game) => {
        console.log(game, ordersInBasket)
        let orderId = ''
        ordersInBasket.forEach(obj=>{
            if(game.id === obj.gameId) {
                orderId = obj.orderId
            }
        })

        deleteOrder(orderId).then(()=>{
            fetchGameOrders().then(data => setGames(data))
            fetchOrders().then(data => setOrder(data))
        })

    }
    console.log(gamesInBasket,"dsdsdsd")


    return (
        <div>
            <Row className="d-flex">
                {gamesInBasket.map(game =>
                    <GameItems key={game.id} game={game} isBasket deleteEvent={deleteGame}/>
                )}

            </Row>
            <CreatePayment ref={modalRef} show={paymentVisible} onClick={makeOrder} onHide={() => setPaymentVisible(false)}/>
            <Button
                variant={"outline-success"}
                className="mt-5"
                disabled={!ordersInBasket.length}
                onClick={()=>setPaymentVisible(true)}
            >
                Оплатить заказ</Button>
<div>Итоговая цена:{totalPrice}$</div>
        </div>
    );

},)

export default Basket;