import React, { FC } from 'react'
import FlightTable from '../../Components/FlightTable/FlightTable'
import SideBar from '../../Components/SideBar/SideBar'
import TableExample from '../../Components/TableExample/TableExample'

const Table:FC = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <FlightTable/>
                    <SideBar/>
                </div>
            </div>
            <TableExample/>
        </div>
    )
}

export default Table
