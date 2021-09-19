import React, { FC } from 'react'
import './FlexibleDates.scss'

const FlexibleDates:FC = () => {
    return (
        <table className="flexibleDates">
            <tr className="flexibleDates__string">
                <th className="flexibleDates__title"></th>
                <th className="flexibleDates__title">2/12</th>
                <th className="flexibleDates__title">2/13</th>
                <th className="flexibleDates__title">2/14</th>
                <th className="flexibleDates__title">2/15</th>
                <th className="flexibleDates__title">2/16</th>
            </tr>
            <tr>
                <td className="flexibleDates__title">3/7</td>
                <td className="flexibleDates__item">$837</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$1,308</td>
                <td className="flexibleDates__item">$837</td>
            </tr>
            <tr>
                <td className="flexibleDates__title">3/8</td>
                <td className="flexibleDates__item">$837</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$837</td>
                <td className="flexibleDates__item">$1,308</td>
            </tr>
            <tr>
                <td className="flexibleDates__title">3/9</td>
                <td className="flexibleDates__item">$624</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$624</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$592</td>
            </tr>
            <tr>
                <td className="flexibleDates__title">3/10</td>
                <td className="flexibleDates__item">$1,308</td>
                <td className="flexibleDates__item">$624</td>
                <td className="flexibleDates__item">$624</td>
                <td className="flexibleDates__item">$837</td>
                <td className="flexibleDates__item">$837</td>
            </tr>
            <tr>
                <td className="flexibleDates__title">3/11</td>
                <td className="flexibleDates__item">$592</td>
                <td className="flexibleDates__item">$624</td>
                <td className="flexibleDates__item">$1,308</td>
                <td className="flexibleDates__item">$837</td>
                <td className="flexibleDates__item">$624</td>
            </tr>
        </table>
    )
}

export default FlexibleDates
