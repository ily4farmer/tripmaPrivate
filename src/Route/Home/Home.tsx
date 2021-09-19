import React, { FC, Fragment } from 'react'
import Hero from '../../Components/Hero/Hero'
import Comment from '../../Components/Comment/Comment'
import HomeExample from '../../Components/HomeExample/HomeExample'

const Home:FC = () => {
    return (
        <Fragment>
            <Hero/>
            <HomeExample/>
            <Comment/>
        </Fragment>
    )
}

export default Home
