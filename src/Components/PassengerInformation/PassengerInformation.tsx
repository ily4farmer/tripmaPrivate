import React, { FC } from 'react'
import './PassengerInformation.scss'

const PassengerInformation:FC = () => {
    return (
        <section className="passenger">
            <div className="container">
                <div className="passenger-block">
                    <form action="#" className="form passenger__form">
                        <h2 className="passenger__title">Passenger information</h2>
                        <p className="passenger__subtitle">
                            Enter the required information for each traveler and be sure that it exactly matches the 
                            government-issued ID presented at the airport.
                        </p>
                        
                        <label className="passenger__label">
                            <h3 className="passenger__label-title">Passenger 1 (Adult)</h3>
                            <div className="passenger__label-block">
                                <input name="First name" type="text" className="form__input passenger__input" placeholder="First name*" required/>
                                <input name="Middle" type="text" className="form__input passenger__input"  placeholder="Middle"/>
                                <input name="Last name" type="text" className="form__input passenger__input"  placeholder="Last name*" required/>
                                <input name="Suffix" type="text" className="form__input passenger__input"  placeholder="Suffix"/>
                                <input name="Date of birth" type="text" className="form__input passenger__input"  placeholder="Date of birth*" required/>
                            </div>
                            <div className="passenger__label-block">
                                <input name="Email address" type="text" className="form__input passenger__input" placeholder="Email address*" required/>
                                <input name="Phone number" type="text" className="form__input passenger__input"  placeholder="Phone number*" required/>
                                <input name="Redress number" type="text" className="form__input passenger__input"  placeholder="Redress number"/>
                                <input name="Known traveller number" type="text" className="form__input passenger__input"  placeholder="Known traveller number*" required/>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PassengerInformation
