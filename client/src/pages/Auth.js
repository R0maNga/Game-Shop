import React from 'react';
import  Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import NavLink from "react-bootstrap/NavLink";
import {useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className = "d-flex justify-content-center align-items-center"
            style = {{height:window.innerHeight-54}}
            >

            <Card style={{width:500}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация': "Регистрация"} </h2>
                <Form className ="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                    placeholder="Введите email..."/>

                    <Form.Control
                        className="mt-2"
                        placeholder="Введите пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        {isLogin ?
                        <div className="d-flex justify-content-between">
                            Нет аккаунта? <NavLink className="p-0" to ={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>

                            :
                            <div>
                                Есть аккаунт? <NavLink to ={LOGIN_ROUTE}>Войдите</NavLink>

                            </div>
                            }
                        <Button
                            className="mt-3 align-self-end"
                            variant={"outline-success"}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                    </Row>


                </Form>
            </Card>
        </Container>
    );
};

export default Auth;