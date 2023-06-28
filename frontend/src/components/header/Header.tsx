import React, {useState, useEffect} from "react";
import './Header.css'
import { Button, Form, Dropdown } from "react-bootstrap";
import logo from './logo.png'
import {BsFillHouseAddFill, BsFillCarFrontFill, BsTools, BsWrenchAdjustableCircleFill, BsTvFill, BsFillPeopleFill, BsSignpostSplitFill, BsTencentQq} from 'react-icons/bs'
import {RiTShirtFill} from 'react-icons/ri'
import {GiCapybara} from "react-icons/gi";
import { Link } from "react-router-dom";
import http from '../../http-common'
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [token, setToken] = useState<Boolean | null>(null)
    const navigate = useNavigate()

    useEffect(()=> {
        const checkToken = async() => {
            const userToken = localStorage.getItem('token')
            if (userToken) {
                try {
                    await http.post('/api/auth/check-token', {token: localStorage.getItem('token')})
                    setToken(true)
                } catch(error) {
                    console.error(error)
                }
            } else {
                setToken(false)
            }
        }
        checkToken()
    }, [])

    const ProfileHandler = () => {
        navigate('/profile')
    }
    const LogOutHandler = () => {
        localStorage.clear()
        navigate('/')
        setToken(false)
    }

    return (
        <>
            <div className="userLine">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="emptyItem"></div>
                <div className="authBlock">
                    { !token &&
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Авторизация
                            </Dropdown.Toggle>
                    
                            <Dropdown.Menu>
                                <Link to={`/login`} className="dropdown-item">Логин</Link>
                                <Link to={`/registration`} className="dropdown-item">Регистрация</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                    { token &&
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Профиль: {localStorage.getItem('email')}
                            </Dropdown.Toggle>
                    
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={ProfileHandler}>Профиль</Dropdown.Item>
                                <Dropdown.Item onClick={LogOutHandler}>Выход</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </div>
                { !token &&
                    <div>
                        <Button className="no_auth_button">Дать объявление</Button>
                    </div>
                }
                { token &&
                    <div>
                        <Button className="auth_button">Дать объявление</Button>
                    </div>
                }
            </div>
            <div className="searchLine">
                <Form>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form>
            </div>
            <div className="category">
                <button className="categoryItem">
                    <BsFillHouseAddFill/>
                    <p>Недвижимость</p>
                </button>
                <button className="categoryItem">
                    <BsFillCarFrontFill/>
                    <p>Авто</p>
                </button>
                <button className="categoryItem">
                    <BsTools/>
                    <p>Работа</p>
                </button>
                <button className="categoryItem">
                    <BsWrenchAdjustableCircleFill/>
                    <p>Услуги</p>
                </button>
                <button className="categoryItem">
                    <RiTShirtFill/>
                    <p>Одежда</p>
                </button>
            </div>
            <div className="category">
                <button className="categoryItem">
                    <BsTvFill/>
                    <p>Электроника</p>
                </button>
                <button className="categoryItem">
                    <BsFillPeopleFill/>
                    <p>Отдам даром</p>
                </button>
                <button className="categoryItem">
                    <BsSignpostSplitFill/>
                    <p>Обменяю</p>
                </button>
                <button className="categoryItem">
                    <BsTencentQq/>
                    <p>Детское</p>
                </button>
                <button className="categoryItem">
                    <GiCapybara/>
                    <p>Животные</p>
                </button>
            </div>
        </>
    )
}

export default Header