import React from 'react'
import { Router, Route, hashHistory , browserHistory, IndexRoute} from 'react-router'

import Home from './home/Home'
import Mapp from './mapp/Map'
import App from './App'
import UserLoginRegister from './user-login-register'
import Store from './store/Store'

const Components = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/map" component={Mapp}/>
            <Route path="/register" component={UserLoginRegister}/>
            <Route path="/store" component={Store}/>
        </Route>
    </Router>
)


export default Components
