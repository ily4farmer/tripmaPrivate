import React, { FC } from 'react'
import FlightTable from '../FlightTable/FlightTable'
import SideBar from '../SideBar/SideBar'
import './ContentTable.scss'

const ContentTable:FC = () => {
    return (
        <section className="section content">
            <div className="container">
                <div className="content-block">
                    <FlightTable/>
                    <SideBar/>
                </div>
            </div>
        </section>
    )
}

export default ContentTable
