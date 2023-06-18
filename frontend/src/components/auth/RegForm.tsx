import React from "react";
import { Form, Button } from "react-bootstrap";
import './AuthForm.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

const RegForm = () => {
    return(
        <div className="loginForm">
            <Form>
                <div className="authLogo">
                    <img src={logo} alt="logo" />
                </div>
                
                <Form.Control className="mb-3" type="text" placeholder="Введите имя" required/>
                <Form.Control className="mb-3" type="text" placeholder="Введите фамилию" required/>
                <Form.Control className="mb-3" type="email" placeholder="Введите email" required/>
                <Form.Control className="mb-3" type="date" placeholder="Введите дату рождения" required/>
                <Form.Control className="mb-3" type="password" placeholder="Пароль" required/>
                <Form.Check className="mb-3" type="checkbox" label="Запомнить меня" />
                <Button variant="success" type="submit">Отправить</Button>

                <div className="navBlock">
                    <Link to={`/`}>Вернуться на главную</Link>
                </div>
                
            </Form>
        </div>
    )
}

export default RegForm