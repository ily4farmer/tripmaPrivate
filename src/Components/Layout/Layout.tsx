import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../Route/Home/Home'
import Passenger from '../../Route/Passenger/Passenger'
import Table from '../../Route/Table/Table'

const Layout = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/table" component={Table}/>
            <Route path="/passenger" component={Passenger}/>
        </Switch>
    )
}

export default Layout
