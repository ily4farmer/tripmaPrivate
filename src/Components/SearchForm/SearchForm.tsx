import React, { FC, useState } from 'react'
import './SearchForm.scss'
import airplaneTop from '../../img/searchForm/airplaneTop.svg'
import airplaneBottom from '../../img/searchForm/airplaneBottom.svg'
import calendar from '../../img/searchForm/calendar.svg'
import person from '../../img/searchForm/person.svg'
import minus from '../../img/searchForm/minus.svg'
import plus from '../../img/searchForm/plus.svg'
import { useTypeSelector } from '../../Store'
import { Link } from 'react-router-dom'

const SearchForm:FC = () => {
    const {fwomWhere, whereTo} = useTypeSelector(state => state.searchForm)
    
    const [counter, setCounter] = useState<boolean>(false)
    const [adults, setAdults] = useState<number>(1)
    const [minors, setMinors] = useState<number>(0)

    if (adults < 1) {
        setAdults(1)
    }

    if (minors < 0) {
        setMinors(0)
    }


    return (
        <form action="#" className="form search">
            <label className="search__wrapper search__from">
                <img className="search__img" src={airplaneTop} alt={airplaneTop} />
                <input list="where" className="form__input search__input " placeholder="From where?" required/>
                <datalist id="where">
                    {fwomWhere.map(el => <option key={el} value={el}></option>)}
                </datalist>
            </label>
            <label className="search__wrapper search__to">
                <img className="search__img" src={airplaneBottom} alt={airplaneBottom} />
                <input list="where" className="form__input search__input" placeholder="Where to?" required/>
                <datalist id="where">
                {whereTo.map(el => <option key={el} value={el}></option>)}
                </datalist>
            </label>
            <div className="search__wrapper search__date">
                <img className="search__img" src={calendar} alt={calendar} />
                <input className="form__input search__input " type="date" placeholder="Depart - Return"/>
            </div>
            <div className="search__wrapper search__person"
            onMouseEnter={() => setCounter(true)}
            onMouseLeave={() => setCounter(false)}>
                <img className="search__img" src={person} alt={person} />
                <input onClick={() => {setCounter(true)}} value={`${adults + minors} adults`} className="form__input search__input" type="text" placeholder="1 adult"/>
                <div style={counter ? {display: "block"} : {display: "none"}} className="search__audit-counter">
                    <div className="search__counter">
                        <span className="search__counter-text">Adults:</span>
                        <img onClick={() => setAdults(adults - 1)}  src={minus} alt={minus} className="search__minus" />
                        <span className="search__result">{adults}</span>
                        <img onClick={() => setAdults(adults + 1)} src={plus} alt={plus} className="search__plus" /></div>
                    <div className="search__counter">
                        <span className="search__counter-text">Minors:</span>
                        <img onClick={() => setMinors(minors - 1)} src={minus} alt={minus} className="search__minus" />
                        <span  className="search__result">{minors}</span>
                        <img onClick={() => setMinors(minors + 1)} src={plus} alt={plus} className="search__plus" />
                    </div>
                </div>
            </div>
            <Link className="search__btn btn" to="/table">
                Search
                {/* <input className="search__btn btn" type="submit" value="Search" /> */}
                </Link>
        </form>
    )
}

export default SearchForm
