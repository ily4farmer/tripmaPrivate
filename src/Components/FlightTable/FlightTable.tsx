import React, { FC } from 'react'
import './FlightTable.scss'
import { useTypeSelector } from '../../Store'
import map from '../../img/flightTable/Map.png'
import down from '../../img/flightTable/down.svg'
import SearchForm from '../SearchForm/SearchForm'
import { Link } from 'react-router-dom'

const FlightTable:FC = () => {
    const {table} = useTypeSelector(state => state.table)
    console.log(table);
    
    return (
        <section className="sectiom table">
            <div className="container">
            <div className="table__wrapper">
                <SearchForm/>
                <form action="" className="form select">
                    <label className="select__label">
                        <select className="select__item" name="Max price">
                            <option value="Max price" selected>Max price</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                    <label className="select__label">
                        <select className="select__item" name="Shops">
                            <option value="Shops" selected>Shops</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                    <label className="select__label">
                        <select className="select__item" name="Times">
                            <option value="Times" selected>Times</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                    <label className="select__label">
                        <select className="select__item" name="Airlines">
                            <option value="Airlines" selected>Airlines</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                    <label className="select__label">
                        <select className="select__item" name="Seat class">
                            <option value="Seat class" selected>Seat class</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                    <label className="select__label">
                        <select className="select__item" name="More">
                            <option value="More" selected>More</option>
                        </select>
                        <img className="select__img" src={down} alt={down} />
                    </label>
                </form>
                    <h2 className="table__main">Choose a <span>departing</span> flight</h2>
                    <table className="table-block">
                            <tbody className="table__body">
                                {
                                    table.map(el => {
                                        return (
                                            <tr key={el.id} className="table__string">
                                                <td className="table__avatar table__item"><img src={el.avatar} alt={el.avatar} /></td>
                                                <td className="table__path table__item">
                                                    <span className="table__title">{el.path.title}</span>
                                                    <p className="table__subtitle">{el.path.subtitle}</p>
                                                </td>
                                                <td className="table__time table__item">
                                                    <span className="table__title">{el.time}</span>
                                                </td>
                                                <td className="table__stop table__item">
                                                    <span className="table__title">{el.stop.title}</span>
                                                    <p className="table__subtitle">{el.stop.stop}</p>
                                                </td>
                                                <td className="table__price table__item">
                                                    <span className="table__title">${el.price.title}</span>
                                                    <p className="table__subtitle">{el.price.subtitle}</p>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    <Link className="table__btn btn" to="/passenger">Show all flights</Link>
                    <img className="table__map" src={map} alt={map} />
            </div>
            </div>
        </section>
    )
}

export default FlightTable
