import React from 'react'
import { Route } from 'react-router-dom'
import { DropdownButton,  MenuItem , Grid, Row, Col } from 'react-bootstrap'

import Bundle from '../common/Bundle'
import loadHome from 'bundle-loader?lazy!../containers/home'
// import loadMapp from 'bundle-loader?lazy!./mapp/Map'
import loadBar from 'bundle-loader?lazy!../containers/Bar'
import loadUserLoginRegister from 'bundle-loader?lazy!../containers/user-login-register'
import loadProfile from 'bundle-loader?lazy!../containers/profile'
import loadRegisterStore from 'bundle-loader?lazy!../containers/register-store'
import loadStore from 'bundle-loader?lazy!../containers/store'
import loadUser from 'bundle-loader?lazy!../containers/user'
import loadContactHistory from 'bundle-loader?lazy!../containers/contacthistory'
import loadChatContainer from 'bundle-loader?lazy!../containers/chat'
import loadGroupPopUp from 'bundle-loader?lazy!../containers/GroupPopUp'
import loadShowDetail from 'bundle-loader?lazy!../containers/ShowDetail'
import loadPopUpUpdate from 'bundle-loader?lazy!../containers/PopUpUpdate'
import loadWarning from 'bundle-loader?lazy!../containers/Warning'
import loadEnlarge from 'bundle-loader?lazy!../containers/Enlarge'
import loadProgress from 'bundle-loader?lazy!../containers/entity/thumnail/Progress'

const Bar = (props) => (
  <Bundle load={loadBar}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

const Home = (props) => (
  <Bundle load={loadHome}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

// const Mapp = () => (
//   <Bundle load={loadMapp}>
//     {(Comp) => (Comp
//       ? <Comp/>
//       : null
//     )}
//   </Bundle>
// )

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
const Store = (props) => (
  <Bundle load={loadStore}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const User = (props) => (
  <Bundle load={loadUser}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const ContactHistory = (props) => (
  <Bundle load={loadContactHistory}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const ChatContainer = (props) => (
  <Bundle load={loadChatContainer}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const GroupPopUp = (props) => (
  <Bundle load={loadGroupPopUp}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const ShowDetail = (props) => (
  <Bundle load={loadShowDetail}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const PopUpUpdate = (props) => (
  <Bundle load={loadPopUpUpdate}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Warning = (props) => (
  <Bundle load={loadWarning}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Enlarge = (props) => (
  <Bundle load={loadEnlarge}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Progress = (props) => (
  <Bundle load={loadProgress}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

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
                <Route path="*" component={Enlarge}/>
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
                                  {/* <Route path="/map" component={Mapp}/> */}
                                  <Route path="/register" component={UserLoginRegister}/>
                                  <Route path="/profile" component={Profile}/>
                                  <Route path="/registerstore" component={RegisterStore}/>
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
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.location.pathname.split('/')[1] != nextProps.location.pathname.split('/')[1]){
            const path = nextProps.location.pathname.split('/')[1]
            if(document.title.split(")").length > 1){
                document.title = document.title.split(")")[0] + ') KajKai'
            }else {
                document.title = 'KajKai'
            }
        }
        return true
    }
    componentDidMount(){
        this.props.onWho()
        this.props.getChatList()
    }
}

export default App
