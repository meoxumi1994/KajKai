import React from 'react'
import { Route } from 'react-router-dom'

import Bar from '~/containers/Bar'
import Bundle from '../common/Bundle'
import loadHome from 'bundle-loader?lazy!../containers/home'
import loadMapp from 'bundle-loader?lazy!./mapp/Map'
import loadUserLoginRegister from 'bundle-loader?lazy!../containers/user-login-register'
import MapContainer from 'bundle-loader?lazy!../containers/mapp/MapContainer'
import loadProfile from 'bundle-loader?lazy!../containers/profile'
import loadRegisterStore from 'bundle-loader?lazy!../containers/register-store'
// import loadChat from 'bundle-loader?lazy!../containers/chat'
import Store from '~/containers/store'
import User from '~/containers/user'
import ContactHistory from '~/containers/contacthistory'
import { DropdownButton,  MenuItem , Grid, Row, Col } from 'react-bootstrap'
import ChatContainer from '~/containers/chat'
import GroupPopUp from '~/containers/GroupPopUp'
import ShowDetail from '~/containers/ShowDetail'
import PopUpUpdate from '~/containers/PopUpUpdate'
import Warning from '~/containers/Warning'

// import AdminContainer from '~/containers/admin/'
// import loadAdmin from 'bundle-loader?lazy!../containers/admin'

import Progress from '~/containers/entity/thumnail/Progress'

const Home = (props) => (
  <Bundle load={loadHome}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
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

// const Admin = () => (
//     <Bundle load={loadAdmin}>
//       {(Comp) => (Comp
//         ? <Comp/>
//         : null
//       )}
//     </Bundle>
// )

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

// const Chat = ({ id }) => (
//     <Bundle load={loadChat}>
//         {(Comp) => (Comp
//           ? <Comp/>
//           : null
//         )}
//     </Bundle>
// )

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
        const path = "/" +this.props.location.pathname.split('/')[1];
        const { width, height, username, onScroll } = this.props
        const { showProgress, closeProgress } = this.props
        return(
            <div style={{ height: '100%' }}>
                <Route path="*" component={Bar}/>
                <GroupPopUp/>
                <PopUpUpdate/>
                <ChatContainer/>
                <Warning/>
                <div ref={ scroll => this.scroll = scroll } onScroll={ () => onScroll(this.scroll.scrollTop)}
                    style={{ height: height - 47 }}>
                    {
                      username && width > 1040 + 280 &&
                          <div style={{ position: 'fixed', zIndex: 10, right: 0, top: 48, height: '100%', width:280 }}>
                              {
                                  path == '/admin'? undefined:
                                  <ContactHistory/>
                              }
                          </div>
                    }
                    <div style={{ paddingTop: 47,
                        // marginRight: (width >  1040 +280 && username)?280: 0,
                        paddingLeft: Math.max(0, Math.min( (username && width > 1040 + 280) ? width - 1330 : 1000000 , (width - 1040) / 2 )) }}>
                        {(path == "/" || path == "/admin" || path == "/map" || path == "/home" ||
                        path == "/register" || path == "/store" || path == "/profile" || path == "/registerstore" )?
                          <div>
                              <div style={{ height: height - 47 }}>
                                  <Route exact path="/" component={Home}/>
                                  <Route path="/home" component={Home}/>
                                  <Route path="/map" component={Mapp}/>
                                  <Route path="/register" component={UserLoginRegister}/>
                                  <Route path="/profile" component={Profile}/>
                                  <Route path="/registerstore" component={RegisterStore}/>
                                  {/* <Route path="/admin" component={Admin}/> */}
                              </div>
                            </div>
                        :  location.pathname.split('/')[1] == 'user'?
                            <div>
                                <Route path="*" component={User}/>
                            </div>
                        :  location.pathname.split('/')[1] == 'post' ?
                            <div>
                                <Route path="*" component={ShowDetail}/>
                            </div>
                        :   <div>
                                <Route path="*" component={Store}/>
                            </div>
                        }
                    </div>
                </div>
                <Progress showModal={showProgress} close={() => closeProgress()}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.onWho()
        this.props.getChatList()
    }
}

export default App
