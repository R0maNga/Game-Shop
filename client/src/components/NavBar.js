import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import jwt_decode from "jwt-decode";


const NavBar = observer (() => {
    const {user} = useContext(Context)
    const history = useHistory()
    let a = localStorage.getItem('token')
    let b = jwt_decode(a)

    const logOut = ()=>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (

        <Navbar bg="primary" variant="light">
            <Container>
                <NavLink className="text-decoration-none" style={{color:'black'}} to={SHOP_ROUTE}>300$ GAMES</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {b.role ==="ADMIN" ?<Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}

                        >
                            Aдмин панель
                        </Button> : ""}


                        <Button

                            variant={"outline-light"}
                            onClick={() => history.push(BASKET_ROUTE)}
                            className="ms-4"
                        >
                            Корзина

                        </Button>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => {
                                logOut()
                                history.push(SHOP_ROUTE)
                            } }
                            className="ms-4"
                        >
                            Выйти
                        </Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;