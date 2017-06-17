import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Top from '~/containers/target/middle/user/Top';

import Interest from '~/containers/target/middle/user/Interest'
import About from '~/containers/target/middle/user/About'
import Post from '~/containers/target/middle/user/Post'
import Store from '~/containers/target/middle/user/Store'
import Contact from '~/containers/target/middle/user/Contact'
import Activity from '~/containers/target/middle/user/Activity'
import Setting from '~/containers/target/middle/user/Setting'

const User = (props) => {
    const { id } = props
    return(
        <div>
            <Top/>
            <div>
                <Route exact path={"/" + id} component={Interest}/>
                <Route path={"/" + id + "/about"} component={About}/>
                <Route path={"/" + id + "/post"} component={Post}/>
                <Route path={"/" + id + "/store"} component={Store}/>
                <Route path={"/" + id + "/contact"} component={Contact}/>
                <Route path={"/" + id + "/activity"} component={Activity}/>
                <Route path={"/" + id + "/setting"} component={Setting}/>
            </div>
        </div>
    )
}

export default User
