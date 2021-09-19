import React, { FC, MouseEvent, useState } from 'react'
import './Header.scss'
import menu from '../../img/header/menu.svg'
import logo from '../../img/header/logo.svg'
import close from '../../img/close.svg'
import { useDispatch } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

const Header:FC = () => {
    const navLink = ['Flights', 'Hotels', 'Packages', 'Sign in']
    const dispach = useDispatch();

    function showModal(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault()
        dispach({type: "ShowModal", payload: true})
    }

    

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header-block">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="header__wrapper">
                        <div className="header__right">
                            <img className="header__close" src={close} alt={close} />
                            <nav className="nav">
                                <ul className="nav__list">
                                    {navLink.map(el => <li key={el} className="nav__link"><NavLink to={el}>{el}</NavLink></li>)}
                                </ul>
                            </nav>
                            <div onClick={showModal} className="header__btn">
                                <Link to="#" className=" btn">Sign up</Link>
                            </div>
                        </div>
                        <img className="header__menu" src={menu} alt={menu} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
