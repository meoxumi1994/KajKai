import React from 'react'
import { Col } from 'react-bootstrap'

import UserVerifyContainer from '../../containers/user-login-register/VerifyContainer'
import UserLoginContainer from '../../containers/user-login-register/LoginContainer'
import UserRegisterContainer from '../../containers/user-login-register/RegisterContainer'

import allString from '../../config/allString'

const LeftScreen = (props) => {
    let { registerResult } = props
    switch (registerResult) {
        case 'REGISTER_WAIT':
            return (
                <div>
                    <UserLoginContainer/>
                    <hr style={{ borderColor: "#333333"}}/>
                    <UserRegisterContainer/>
                </div>
            )
        case 'REGISTER_ING':
            return (
                <div style={{ pointerEvents: 'none', cursor: 'default' }}>
                    <UserLoginContainer/>
                    <hr style={{ borderColor: "#333333"}}/>
                    <UserRegisterContainer/>
                </div>
            )
        case 'REGISTER_ALREADY':
            return (
                <div>
                    <UserVerifyContainer/>
                </div>
            )
        default:
            return <div></div>
    }
}


class UserLoginRegister extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { language, onLanguageClick, registerResult } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <Col xs={6} sm={6} md={6} style={{ height: window.innerHeight - 146}}>
                        <h3 className="text-center">
                            {allString.get(language,'KAJKAI_THANK')}
                        </h3>
                        <div className="text-center">
                            <img src="/images/world.png" alt="Cinque Terre" width="75%"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} style={{ height: window.innerHeight - 146, width: 460 }}>
                        <LeftScreen registerResult={registerResult} language = {language}/>
                        {/* <UserVerify/> */}
                    </Col>
                </div>
                <div className="row" style={{ height: 102, backgroundColor: 'white' }}>
                    <div style={{ marginLeft: 100}} className="btn"
                        onClick={()=> onLanguageClick('VIETNAMESE')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> onLanguageClick('ENGLISH')}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLoginRegister;
