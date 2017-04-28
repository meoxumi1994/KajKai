import React from 'react'
import { Router, Route, hashHistory , browserHistory, IndexRoute} from 'react-router'

import Home from './home/Home'
import Mapp from './mapp/Map'
import Profile from './Profile'
import AppContainer from '../containers/AppContainer'
import UserLoginRegisterContainer from '../containers/user-login-register'
import Store from './store/Store'

const Components = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Home}/>
            <Route path="/map" component={Mapp}/>
            <Route path="/register" component={UserLoginRegisterContainer}/>
            <Route path="/store" component={Store}/>
            <Route path="/profile" component={Profile}/>
        </Route>
    </Router>
)

export default Components
