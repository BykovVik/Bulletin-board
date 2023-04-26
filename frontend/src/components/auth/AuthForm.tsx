import React from "react";
import { Form, Button } from "react-bootstrap";
import './AuthForm.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

const AuthForm = (props:any) => {
    return(
        <div className="loginForm">
            <Form>
                <div className="authLogo">
                    <img src={logo} alt="logo" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control type="email" placeholder="Введите email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Отправить
                </Button>
                {props.title === 'login' &&
                <div className="navBlock">
                    <Link to={`/`}>Главная </Link>
                    <p> | </p>
                    <Link to={`/registration`}> Регистрация</Link>
                </div>
                }
                {props.title === 'registration' &&
                <div className="navBlock">
                    <Link to={`/`}>Вернуться на главную </Link>
                </div>
                }
            </Form>
        </div>
    )
}

export default AuthForm