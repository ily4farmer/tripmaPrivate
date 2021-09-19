import React, { FC } from 'react'
import './Comment.scss'
import avatar from '../../img/comment/avatar1.png'
import avatarTwo from '../../img/comment/avatar2.png'
import avatarThree from '../../img/comment/avatar3.png'
import star from '../../img/comment/star.svg'
import starEmpty from '../../img/comment/starEmpty.svg'
import { Link } from 'react-router-dom'

const Comment:FC = () => {

    const comments = [
        {
            id: 1,
            avatar: avatar,
            name: 'Yifei Chen',
            city: 'Seoul, South Korea',
            date: 'April 2019',
            text: 'What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me '
        },

        {
            id: 2,
            avatar: avatarTwo,
            name: 'Kaori Yamaguchi',
            city: 'Honolulu, Hawaii',
            date: 'February 2017',
            text: 'My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and '
        },

        {
            id: 3,
            avatar: avatarThree,
            name: 'Anthony Lewis',
            city: 'Berlin, Germany',
            date: 'April 2019',
            text: 'When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for '
        }
    ]

    return (
        <section className="section comment">
            <div className="container">
                <h2 className="section__title comment__title">What <span className="comment__color">Tripma</span> users are saying</h2>
                <div className="comment-block">
                    <ul className="comment__list">
                        {comments.map(el => {
                            return (
                                <li key={el.id} className="comment__item">
                                    <div className="comment__item-block">
                                        <img src={el.avatar} alt={el.avatar} />
                                    </div>
                                    <div className="comment__item-block">
                                        <h4 className="comment__name">{el.name}</h4>
                                        <h5 className="comment__subtitle">{el.city} | {el.date}</h5>
                                        <ul className="comment__evaluation">
                                            <li className="comment__star">
                                                <img src={star} alt={star} />
                                            </li>
                                            <li className="comment__star">
                                                <img src={star} alt={star} />
                                            </li>
                                            <li className="comment__star">
                                                <img src={star} alt={star} />
                                            </li>
                                            <li className="comment__star">
                                                <img src={star} alt={star} />
                                            </li>
                                            <li className="comment__star">
                                                <img src={starEmpty} alt={starEmpty} />
                                            </li>
                                        </ul>
                                        <p className="comment__text">
                                            {el.text}
                                            <Link className="comment__link" to="#">read more...</Link>
                                        </p>
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

export default Comment
