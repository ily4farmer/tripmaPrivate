import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import btnRight from '../../img/btnRight.svg'
import { ISample } from '../../types'

interface ISampleComponent {
    item: ISample[]
    titleExample: any
}

const SampleComponent:FC<ISampleComponent> = ({item, titleExample}) => {

   
    return (
        <section className="section">
            <div className="container">
            <div className="section__top">
                {titleExample()}
                <Link to="#" className="section__close">
                    All
                    <img src={btnRight} alt={btnRight} />
                </Link>
            </div>
            <div className="section-block">
                <ul className="section__list">
                {item.map((el:any) => {
                    return (
                        <li key={el.id} className="section__item">
                            <img className="section__img" src={el.img} alt={el.img} />
                            <div className="section__item-footer">
                                <div className="section__info">
                                    <h3 className="section__city">{el.title}<span>{el.span}</span></h3>
                                    <span className="section__price">{el.price}</span>
                                </div>
                                <p className="section__text">{el.text}</p>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
            </div>
        </section>
    )
}

export default SampleComponent
