import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import './AuthForm.css'
import logo from './logo.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import http from '../../http-common'
import AlertBox from "./AlertBox";

type FormData = {
    email: string,
    password: string,
}

const LoginForm = () => {
    const navigate = useNavigate()
    const [error, setError] = useState<boolean | null>(null);
    const [formValues, setFormValues] = useState<FormData>({
        email: "",
        password: "",
    })

    const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            //send form-data on server
            const response = await http.post('/api/auth/login', formValues);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.user.email);
            navigate('/')
        } catch (error:any) {
            setError(true);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setError(false)
    };

    return(
        <div className="loginForm">
            <Form onSubmit={onSubmitHandler}>
                <div className="authLogo">
                    <img src={logo} alt="logo" />
                </div>
                
                <Form.Control className="mb-3" type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Введите email" />
                <Form.Control className="mb-3" type="password" name="password" value={formValues.password} onChange={handleChange} placeholder="Пароль" />
                <Button variant="success" type="submit">Отправить</Button>
                {error &&
                    <AlertBox addClass="fade-in mt-3" addText="Email или Password не обнаружены в базе данных"/>
                }
                {!error &&
                    <AlertBox addClass="fade-none mt-3" addText="Email или Password не обнаружены в базе данных"/>
                }
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