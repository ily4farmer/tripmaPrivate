import React, { FC, useEffect, useState } from 'react'
import './Modal.scss'
import close from '../../img/close.svg'
import google from '../../img/modal/google.svg'
import apple from '../../img/modal/apple.svg'
import facebook from '../../img/modal/facebook.svg'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../Store'
import { Link } from 'react-router-dom'

const Modal:FC = () => {
    const dispatch = useDispatch()
    const modal = useTypeSelector(state => state.modal.show)
    const [height, setHeight] = useState<number>()
    useEffect(()=>{
        setHeight(document.body.scrollHeight);
    }, [])
    
    return (
        <div className="modal" style={modal ? {height: height, display: "block"} : {display: "none"}} onClick={() => dispatch({type: "ShowModal", payload: false})} >
            <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
                <div className="modal__top">
                    <h2 className="modal__title">Sign up for Tripma</h2>
                    <img className="modal__close" src={close} alt={close} onClick={() => dispatch({type: "ShowModal", payload: false})}/>
                    <p className="modal__subtitle">
                        Tripma is totally free to use. 
                        Sign up using your email address or phone number below to get started.
                    </p>
                </div>
                <form action="#" className="modal__form form">
                    <input className="form__input modal__input" type="email" placeholder="Email or phone number" required/>
                    <input className="form__input modal__input" type="password" placeholder="Password" required/>
                    <label className="modal__checkbox">
                        <input type="checkbox"/>
                        <p>I agree to the <span>terms and conditions</span></p>
                    </label>
                    
                    <label className="modal__checkbox">
                        <input type="checkbox"/>
                        <p>Send me the latest deal alerts</p>
                    </label>
                    <input className="btn modal__btn" type="submit" />
                </form>
                <div className="modal__option">
                    <span>or</span>
                </div>
                <div className="modal__continue">
                    <Link to="#" className="modal__link form__btn">
                        <img src={google} alt={google} className="modal__img" />
                        <span className="modal__span">Continue with Google</span>
                    </Link>
                    <Link to="#" className="modal__link form__btn">
                        <img src={apple} alt={apple} className="modal__img" />
                        <span className="modal__span">Continue with Google</span>
                    </Link>
                    <Link to="#" className="modal__link form__btn">
                        <img src={facebook} alt={facebook} className="modal__img" />
                        <span className="modal__span">Continue with Google</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal
