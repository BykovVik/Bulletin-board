import React from "react";
import { Form, Button } from "react-bootstrap";
import './AuthForm.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

const LoginForm = () => {
    return(
        <div className="loginForm">
            <Form>
                <div className="authLogo">
                    <img src={logo} alt="logo" />
                </div>
                
                <Form.Control className="mb-3" type="email" placeholder="Введите email" />
                <Form.Control className="mb-3" type="password" placeholder="Пароль" />
                <Form.Check className="mb-3" type="checkbox" label="Запомнить меня" />
                <Button variant="success" type="submit">Отправить</Button>

                <div className="navBlock">
                    <Link to={`/`}>Главная </Link>
                    <p> | </p>
                    <Link to={`/registration`}> Регистрация</Link>
                </div>
                
            </Form>
        </div>
    )
}

export default LoginForm