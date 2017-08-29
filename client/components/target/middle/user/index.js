import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Bundle from '../../../../common/Bundle'
import loadTop from 'bundle-loader?lazy!../../../../containers/target/middle/user/Top'
import loadInterest from 'bundle-loader?lazy!../../../../containers/target/middle/user/Interest'
import loadAbout from 'bundle-loader?lazy!../../../../containers/target/middle/user/About'
import loadPost from 'bundle-loader?lazy!../../../../containers/target/middle/user/Post'
import loadStore from 'bundle-loader?lazy!../../../../containers/target/middle/user/Store'
import loadContact from 'bundle-loader?lazy!../../../../containers/target/middle/user/Contact'
import loadActivity from 'bundle-loader?lazy!../../../../containers/target/middle/user/Activity'
import loadSetting from 'bundle-loader?lazy!../../../../containers/target/middle/user/Setting'

const Top = (props) => (
  <Bundle load={loadTop}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Interest = (props) => (
  <Bundle load={loadInterest}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const About = (props) => (
  <Bundle load={loadAbout}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Post = (props) => (
  <Bundle load={loadPost}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Store = (props) => (
  <Bundle load={loadStore}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Contact = (props) => (
  <Bundle load={loadContact}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Activity = (props) => (
  <Bundle load={loadActivity}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Setting = (props) => (
  <Bundle load={loadSetting}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

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
