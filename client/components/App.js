import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Bar from '~/containers/Bar'
import Bundle from '../common/Bundle'
import loadHome from 'bundle-loader?lazy!./home/Home'
import loadMapp from 'bundle-loader?lazy!./mapp/Map'
import loadUserLoginRegister from 'bundle-loader?lazy!../containers/user-login-register'
import loadProfile from 'bundle-loader?lazy!../containers/profile'
import loadRegisterStore from 'bundle-loader?lazy!../containers/register-store'
import loadStore from 'bundle-loader?lazy!../containers/store'
import loadChat from 'bundle-loader?lazy!../containers/chat'
import Target from '~/containers/target'
// import loadTarget from 'bundle-loader?lazy!../containers/target'

import Comment from '~/containers/entity/row/Comment'

const Home = () => (
  <Bundle load={loadHome}>
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

const Profile = () => (
    <Bundle load={loadProfile}>
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
    <Bundle load={loadStore}>
        {(Comp) => (Comp
          ? <Comp/>
          : null
        )}
    </Bundle>
)

const Chat = ({ id }) => (
    <Bundle load={loadChat}>
        {(Comp) => (Comp
          ? <Comp/>
          : null
        )}
    </Bundle>
)

// const Target = ({ id }) => (
//     <Bundle load={loadTarget}>
//         {(Comp) => (Comp
//           ? <Comp/>
//           : null
//         )}
//     </Bundle>
// )

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const path = this.props.location.pathname;
        return(
            <div style={{ minWidth: 990, minHeight: 700 }}>
                <Comment/>
                <Bar/>
                <hr style={{margin: 0}}></hr>
                {(path == "/" || path == "/chat" || path == "/map" || path == "/register" || path == "/store" || path == "/profile" || path == "/registerstore" )?
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/map" component={Mapp}/>
                        <Route path="/register" component={UserLoginRegister}/>
                        <Route path="/store" component={Store}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/registerstore" component={RegisterStore}/>
                        <Route path="/chat" component={Chat}/>
                    </div>
                :   <div>
                        <Target id={path.substring(1)}/>
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.onWho();
    }
}

export default App
