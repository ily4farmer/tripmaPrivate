import React, { FC } from 'react'
import './PriceGrid.scss'
import PriceHistory from '../../img/priceGrid/PriceHistory.svg'
import FlexibleDates from '../FlexibleDates/FlexibleDates'

const PriceGrid:FC = () => {
    return (
        <section className="priceGrid">
            <div className="priceGrid-block">
                <div className="priceGrid__top">
                    <h3 className="priceGrid__title">Price grid <span>(flexible dates)</span></h3>
                </div>
                <FlexibleDates/>
                <div className="priceGrid__top">
                    <h3 className="priceGrid__title">Price history</h3>
                </div>
                    <img src={PriceHistory} alt={PriceHistory} className="priceGrid__history" />
                <div className="priceGrid__top">
                    <h3 className="priceGrid__title">Price rating</h3> <button className="priceGrid__btn">Buy soon</button>
                </div>
                <p className="priceGrid__recommend">
                    We recommend booking soon. 
                    The average cost of this flight is $750, 
                    but could rise 18% to $885 in two weeks.
                </p>
                <p className="priceGrid__info">
                    Tripma analyzes thousands of flights, prices, 
                    and trends to ensure you get the best deal.
                </p>
            </div>
        </section>
    )
}

export default PriceGrid
