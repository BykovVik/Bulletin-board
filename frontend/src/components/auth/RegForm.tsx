import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import './AuthForm.css'
import logo from './logo.png'
import { Link } from "react-router-dom";
import AlertBox from "./AlertBox";
import http from '../../http-common'
import { useNavigate } from "react-router-dom";

type FormData = {
    name: string,
    last_name: string,
    email: string,
    password: string,
    birthday: Date,
}

const RegForm = () => {

    const navigate = useNavigate();
    const [error, setError] = useState<boolean | null>(null);
    const [formValues, setFormValues] = useState<FormData>({
        name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: new Date('1990-01-01'),
    })

    const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            //send form-data on server
            const response = await http.post('/api/auth/register', formValues);
            //save token in localStorage
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
                
                <Form.Control className="mb-3" type="text" name="name" placeholder="Введите имя" value={formValues.name} onChange={handleChange} required/>
                <Form.Control className="mb-3" type="text" name="last_name" placeholder="Введите фамилию" value={formValues.last_name} onChange={handleChange} required/>
                <Form.Control className="mb-3" type="email" name="email" placeholder="Введите email" value={formValues.email} onChange={handleChange} required/>
                <Form.Control className="mb-3" type="password" name="password" placeholder="Пароль" value={formValues.password} onChange={handleChange} required/>
                <Form.Control className="mb-3" type="date" name="date" placeholder="Введите дату рождения" onChange={handleChange} required/>
                <Button variant="success" type="submit">Отправить</Button>

                {error &&
                    <AlertBox addClass="fade-in mt-3" addText="Пользователь с таким email уже зарегистрирован"/>
                }
                {!error &&
                    <AlertBox addClass="fade-none mt-3" addText="Пользователь с таким email уже зарегистрирован"/>
                }

                <div className="navBlock">
                    <Link to={`/`}>Вернуться на главную</Link>
                </div>
                
            </Form>
        </div>
    )
}

export default RegForm