import React from "react";
import './Header.css'
import { Button, Form } from "react-bootstrap";
import logo from './logo.png'
import {BsFillHouseAddFill, BsFillCarFrontFill, BsTools, BsWrenchAdjustableCircleFill, BsTvFill, BsFillPeopleFill, BsSignpostSplitFill, BsTencentQq} from 'react-icons/bs'
import {RiTShirtFill} from 'react-icons/ri'
import {GiCapybara} from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = (props:any) => {

    return (
        <>
            <div className="userLine">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="emptyItem"></div>
                <div className="authBlock">
                    <Link to={`/login`}>Sign up/Login</Link>
                </div>
                <div>
                    <Button variant="success">Write an ad</Button>
                </div>
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