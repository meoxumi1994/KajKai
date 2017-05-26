import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { socket } from '~/components/support'

import Bar from '~/containers/Bar'
// import Home from './home/Home'
// import Mapp from './mapp/Map'
// import Profile from '~/containers/profile'
// import UserLoginRegister from '~/containers/user-login-register'
// import RegisterStore from '~/containers/register-store'
// import Store from '~/containers/store'

import Bundle from '../common/Bundle'
import loadHome from 'bundle-loader?lazy!./home/Home'
import loadMapp from 'bundle-loader?lazy!./mapp/Map'
import loadProfile from 'bundle-loader?lazy!../containers/profile'
import loadUserLoginRegister from 'bundle-loader?lazy!../containers/user-login-register'
import loadRegisterStore from 'bundle-loader?lazy!../containers/register-store'
import loadStore from 'bundle-loader?lazy!../containers/store'

const Home = () => (
  <Bundle load={loadHome}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)

const Profile = () => (
  <Bundle load={loadProfile}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)

const Mapp = () => (
  <Bundle load={loadMapp}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)

const UserLoginRegister = () => (
  <Bundle load={loadUserLoginRegister}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)

const RegisterStore = () => (
  <Bundle load={loadRegisterStore}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)


const Store = () => (
  <Bundle load={Store}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)


class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{ minWidth: 990, minHeight: 700 }}>
                <Bar/>
                {/* <input type="text" ref="input"/>
                <button onClick={ () => console.log('123123')}>click</button> */}
                <hr style={{margin: 0}}></hr>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/map" component={Mapp}/>
                    <Route path="/register" component={UserLoginRegister}/>
                    <Route path="/store" component={Store}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/registerstore" component={RegisterStore}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        // socket.on('news', (data) => {
        //     console.log(data);
        //     // socket.emit('my other event', { my: 'data' });
        // });
        this.props.onWho();
    }
}

export default App
