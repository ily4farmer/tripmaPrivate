import React, { FC, Fragment } from 'react'
import { useTypeSelector } from '../../Store'
import './HomeExample.scss'
import HomeSample from '../SampleComponent/SampleComponent'
import kenya from '../../img/home/kenya.png'
import { Link } from 'react-router-dom'

const HomeExample:FC = () => {

    const {flight, residence} = useTypeSelector(state => state.home)

    function flightTitle() {
        return <h2 className="section__title">Find your next adventure with these <span className="flight__color">flight deals</span></h2>
    }

    function residenceTitle() {
        return <h2 className="section__title">Explore unique <span className="residence__color">places to stay</span></h2>
    }

    return (
        <Fragment>
            <HomeSample item={flight} titleExample={flightTitle}/>
            <section className="section">
                <div className="container">
                    <div className="section-block">
                        <ul className="section__list">
                            <li className="section__item home__item">
                                <img className="section__img home__img" src={kenya} alt={kenya} />
                                <div className="section__item-footer">
                                    <div className="section__info">
                                        <h3 className="section__city">Tsavo East National Park, <span>Kenya</span></h3>
                                    </div>
                                    <p className="section__text">
                                        Named after the Tsavo River, and opened in April 1984, 
                                        Tsavo East National Park is one of the oldest parks in Kenya. 
                                        It is located in the semi-arid Taru Desert.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <HomeSample item={residence} titleExample={residenceTitle}/>
            <section className="section home">
                <div className="container">
                    <div className="home-block">
                        <Link className="home__btn btn" to="#">Explore more stays</Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomeExample
