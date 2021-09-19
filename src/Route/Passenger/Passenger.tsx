import React, { FC } from 'react'
import './Passenger.scss'
import PassengerInformation from '../../Components/PassengerInformation/PassengerInformation'
import SideBar from '../../Components/SideBar/SideBar'

const Passenger:FC = () => {
    return (
        <section className="passengerBlock">
            <div className="container">
                <div className="passengerBlock-block">
                    <PassengerInformation/>
                    <SideBar/>
                </div>
            </div>
        </section>
    )
}

export default Passenger
