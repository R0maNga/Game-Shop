import React, {useContext, useState} from 'react';
import  Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {useLocation, useHistory} from "react-router-dom";
import {registration} from "../http/userAPI";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)

            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
            
        }
    }

    return (
        <Container
            className = "d-flex justify-content-center align-items-center"
            style = {{height:window.innerHeight-54}}
            >

            <Card style={{width:500}} className="p-5 bg-info ">
                <h2 className="m-auto">{isLogin ? 'Авторизация': "Регистрация"} </h2>
                <Form className ="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите email..."
                        value={email}
                        onChange ={e=> setEmail(e.target.value)}
                        />

                    <Form.Control
                        className="mt-2"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange ={e=> setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        {isLogin ?
                        <div className="d-flex justify-content-between">
                            Нет аккаунта? <NavLink className="p-0" to ={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>

                            :
                            <div className="d-flex justify-content-between">
                                Есть аккаунт? <NavLink className="p-0" to ={LOGIN_ROUTE}>Войдите</NavLink>

                            </div>
                            }
                        <Button
                            className="mt-3 align-self-end"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                    </Row>


                </Form>
            </Card>
        </Container>
    );
});

export default Auth;