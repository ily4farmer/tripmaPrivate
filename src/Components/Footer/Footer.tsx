import React, { FC } from 'react'
import './Footer.scss'
import logo from '../../img/header/logo.svg'
import twitter from '../../img/footer/twitter.svg'
import instagram from '../../img/footer/instagram.svg'
import facebook from '../../img/footer/facebook.svg'
import appStore from '../../img/footer/appStore.svg'
import googlePlay from '../../img/footer/googlePlay.svg'
import { Link } from 'react-router-dom'

const Footer:FC = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer-block">
                        <div className="footer__logo logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="footer__pages">
                            <ul  className="footer__list">
                                    <h3 className="footer__title">About</h3>
                                    <li className="footer__link">
                                        <Link to='#'>About Tripma</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>How it works</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Careers</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Press</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Blog</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Forum</Link>
                                    </li>
                            </ul>   
                            <ul  className="footer__list">
                                    <h3 className="footer__title">Partner with us</h3>
                                    <li className="footer__link">
                                        <Link to='#'>Partnership programs</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Affiliate program</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Affiliate program</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Promotions and events</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Integrations</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Community</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Loyalty program</Link>
                                    </li>
                            </ul>
                            <ul  className="footer__list">
                                    <h3 className="footer__title">Support</h3>
                                    <li className="footer__link">
                                        <Link to='#'>Help Center</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Contact us</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Privacy policy</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Terms of service</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Trust and safety</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Community</Link>
                                    </li>
                            </ul>  
                            <ul  className="footer__list">
                                    <h3 className="footer__title">Get the app</h3>
                                    <li className="footer__link">
                                        <Link to='#'>Tripma for Android</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Tripma for iOS</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Mobile site</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>Terms of service</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>
                                            <img className="footer__link-img" src={appStore} alt={appStore}/>
                                        </Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to='#'>
                                            <img className="footer__link-img" src={googlePlay} alt={googlePlay}/>
                                        </Link>
                                    </li>
                            </ul>              
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <ul className="footer__bottom-list">
                        <li className="footer__bottom-item">
                                <Link  to="#"><img src={twitter} alt={twitter} /></Link>
                            </li>
                        <li className="footer__bottom-item">
                            <Link to="#"><img src={instagram} alt={instagram} /></Link>
                        </li>
                        <li className="footer__bottom-item">
                            <Link to="#"><img src={facebook} alt={facebook} /></Link>
                        </li>
                    </ul>
                    <p className="footer__bottom-text">© 2020 Tripma incorporated</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
