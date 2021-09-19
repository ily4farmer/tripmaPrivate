import React, { FC } from 'react'
import text from '../../img/hero/text.svg'
import SearchForm from '../SearchForm/SearchForm'
import './Hero.scss'

const Hero:FC = () => {
    return (
        <section className="section hero">
            <div className="container">
                <div className="hero-block">
                    <div className="hero__title">
                        <img src={text} alt={text} className="hero__title-img" />
                    </div>
                    <SearchForm/>
                </div>
            </div>
        </section>
    )
}

export default Hero
