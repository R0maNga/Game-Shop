import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import NavLink from "react-bootstrap/NavLink";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'


const NavBar = observer (() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (

        <Navbar bg="primary" variant="light">
            <Container>
                <NavLink style={{color:'black'}} to={SHOP_ROUTE}>300$ GAMES</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onCliclk={() => history.push(ADMIN_ROUTE)}> Aдмин панель </Button>
                        <Button variant={"outline-light"} onCliclk={() => history.push(LOGIN_ROUTE)} className="ms-4" > Выйти </Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;