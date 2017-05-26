import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home/Home'
import Mapp from './mapp/Map'
import Profile from '~/containers/profile'
import App from '~/containers/App'
import UserLoginRegister from '~/containers/user-login-register'
import RegisterStore from '~/containers/register-store'
import Store from '~/containers/store'
import Chat from '~/containers/chat'

const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>
)

export default Components
