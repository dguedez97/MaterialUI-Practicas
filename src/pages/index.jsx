import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './views/Home'
import MakeStyles from './views/MakeStyles'
import MuiTheme from './views/MuiTheme'
import Drawer from './views/DrawerStatic'
import Lists from './views/Lists'
import Hidden from './views/Hidden'
import DrawerStatic from './views/DrawerStatic'
import DrawerResponsive from './views/DrawerResponsive'

const Views = () => {
    return (
        <Fragment>
            <Route path='/' component={Home} exact />
            <Route path='/styles' component={MakeStyles} exact />
            <Route path='/theme' component={MuiTheme} exact />
            <Route path='/drawer' component={Drawer} exact />
            <Route path='/lists' component={Lists} exact />
            <Route path='/hidden' component={Hidden} exact />
            <Route path='/drawer/static' component={DrawerStatic} exact />
            <Route path='/drawer/responsive' component={DrawerResponsive} exact />
        </Fragment>
    )
}

export default Views
