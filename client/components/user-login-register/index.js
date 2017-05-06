import React from 'react'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router';

import UserVerifyContainer from '../../containers/user-login-register-container/VerifyContainer'
import UserLoginContainer from '../../containers/user-login-register-container/LoginContainer'
import UserRegisterContainer from '../../containers/user-login-register-container/RegisterContainer'

import allString from '../../config/allString'

const LeftScreen = (props) => {
    let { auth } = props
    if(auth == 'REGISTER_SUCCESS'){
        return (
            <div>
                <UserVerifyContainer/>
            </div>
        )
    }
    if(auth == 'REGISTER_ING' || auth == 'LOGIN_ING'){
        return (
            <div style={{ pointerEvents: 'none', cursor: 'default' }}>
                <UserLoginContainer/>
                <hr style={{ borderColor: "#333333"}}/>
                <UserRegisterContainer/>
            </div>
        )
    }
    return (
        <div>
            <UserLoginContainer/>
            <hr style={{ borderColor: "#333333"}}/>
            <UserRegisterContainer/>
        </div>
    )
}


class UserLoginRegister extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { user, auth, changeLanguageClick } = this.props
        let language = user.language
        if(auth == 'WHO_ING')
            return <div></div>
        return (
            <div className="container-fluid">
                <div className="row">
                    <Col xs={6} sm={6} md={6} style={{ minHeight: 700-146, height: window.innerHeight - 146, backgroundColor: 'white'}}>
                        <div className="text-center">
                          <h2>
                              KajKai<small>{allString.get(language,'KAJKAI_THANK')}</small>
                          </h2>
                        </div>
                        <div className="text-center">
                            <img src="/images/world.png" alt="Cinque Terre" width="75%"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} style={{ minHeight: 700-146, height: window.innerHeight - 146, width: 460 }}>
                        <LeftScreen {...this.props}/>
                        {/* <UserVerify/> */}
                    </Col>
                </div>
                <div className="row" style={{ height: 100, backgroundColor: 'white' }}>
                    <hr style={{margin: 0}}></hr>
                    <div style={{ marginLeft: 100}} className="btn"
                        onClick={()=> changeLanguageClick('VIETNAMESE', user)}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguageClick('ENGLISH', user)}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        let { user  } = this.props
        if(user.username){
            browserHistory.push('/profile');
        }
    }
}

export default UserLoginRegister;
