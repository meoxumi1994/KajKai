import React from 'react'
// import { Router, Route, hashHistory , browserHistory, IndexRoute} from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'


import Home from './home/Home'
import Mapp from './mapp/Map'
import Profile from '~/containers/profile'
import App from '~/containers/App'
import UserLoginRegister from '~/containers/user-login-register'
import RegisterStore from '~/containers/register-store'
import Store from '~/containers/store'

const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>
)

export default Components
