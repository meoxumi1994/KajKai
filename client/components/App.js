import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { socket } from '~/components/support'

import Bar from '~/containers/Bar'
import Home from './home/Home'
import Mapp from './mapp/Map'
import Profile from '~/containers/profile'
import UserLoginRegister from '~/containers/user-login-register'
import RegisterStore from '~/containers/register-store'
import Store from '~/containers/store'


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
