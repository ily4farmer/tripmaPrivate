import React, { FC } from 'react'
import PriceGrid from '../PriceGrid/PriceGrid'
import './SideBar.scss'

const SideBar:FC = () => {
    return (
        <aside className="sidebar">
            <div className="container">
                <div className="sidebar__container">
                    <PriceGrid/>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
