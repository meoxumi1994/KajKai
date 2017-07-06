import React from 'react'
import { Route } from 'react-router-dom'

import Bar from '~/containers/Bar'
import Bundle from '../common/Bundle'
import loadHome from 'bundle-loader?lazy!./home/Home'
// import loadMapp from 'bundle-loader?lazy!./mapp/Map'
import loadUserLoginRegister from 'bundle-loader?lazy!../containers/user-login-register'
import MapContainer from 'bundle-loader?lazy!../containers/mapp/MapContainer'

import loadProfile from 'bundle-loader?lazy!../containers/profile'
import loadRegisterStore from 'bundle-loader?lazy!../containers/register-store'
import loadChat from 'bundle-loader?lazy!../containers/chat'
import Store from '~/containers/store'
import User from '~/containers/user'
import ContactHistory from '~/containers/contacthistory'
import ChatCenterContainer from '~/containers/chat/center'
import { DropdownButton,  MenuItem , Grid, Row, Col } from 'react-bootstrap'

const Home = () => (
  <Bundle load={loadHome}>
    {(Comp) => (Comp
      ? <Comp/>
      : null
    )}
  </Bundle>
)

const Mapp = () => (
  <Bundle load={MapContainer}>
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
        const { width, height, username, onScroll } = this.props
        const { messagesKey, messagesMap, styles } = this.props
        // console.log(this.props)
        return(
            <div style={{ height: '100%', minWidth: 1100 }}>
                <Bar/>
                <div ref={ scroll => this.scroll = scroll } onScroll={ () => onScroll(this.scroll.scrollTop)}
                    style={{ height: height - 48 }}>
                    { username && width > 1100 + 280 &&
                        <div style={{ position: 'fixed',right: 0, top: 47, height: '100%', width: '15%'}}>
                            <ContactHistory/>
                        </div>
                    }
                    <div style={{ paddingTop: 48, marginRight: (width > 1100 + 280)? 280: 0 }}>
                        {(path == "/" || path == "/chat" || path == "/map" || path == "/register" || path == "/store" || path == "/profile" || path == "/registerstore" )?
                          <div>
                              <div style={{ height: height - 48, width: Math.max(1100, width) }}>
                                  <Route exact path="/" component={Home}/>
                                  <Route path="/map" component={Mapp}/>
                                  <Route path="/register" component={UserLoginRegister}/>
                                  <Route path="/profile" component={Profile}/>
                                  <Route path="/registerstore" component={RegisterStore}/>
                                  <Route path="/chat" component={Chat}/>
                              </div>
                              {/* <div style={path != "/chat"? {display:'inline'}: {display:'none'}}>
                                  {
                                     messagesKey.length == 0? undefined:
                                     messagesKey.map((mesId,index) => {
                                       return (<div key={mesId} style={{
                                            position: 'fixed',
                                            bottom: 0,
                                            backgroundColor: 'white',
                                            width: 320 ,
                                            height: 400,
                                            zIndex:100,
                                            marginLeft: index * 325 + 5
                                          }}>
                                              <ChatCenterContainer
                                                mesId={mesId}
                                                styles={styles}
                                                messagesMap={messagesMap}/>
                                          </div>)
                                     })
                                  }
                                </div> */}
                            </div>
                        :  location.pathname.split('/')[1] == 'user'?
                            <div>
                                <Route path="*" component={User}/>
                            </div>
                        :   <div>
                                <Route path="*" component={Store}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onWho()
    }
}

export default App
