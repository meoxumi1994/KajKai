import React from 'react'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router';

import VerifyContainer from '../../containers/user-login-register-container/VerifyContainer'
import LoginContainer from '../../containers/user-login-register-container/LoginContainer'
import RegisterContainer from '../../containers/user-login-register-container/RegisterContainer'

import allString from '../../config/allString'

class LoginRegister extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { g, user, whoing, changeLanguage, isregistersuccess, isloading } = this.props
        if(whoing)
            return <div></div>
        return (
            <div className="container-fluid">
                <div className="row">
                    <Col xs={6} sm={6} md={6} style={{ minHeight: 700-146, height: window.innerHeight - 146, backgroundColor: 'white'}}>
                        <div className="text-center">
                          <h2>
                              KajKai<small>{g('KAJKAI_THANK')}</small>
                          </h2>
                        </div>
                        <div className="text-center">
                            <img src="/images/world.png" alt="Cinque Terre" width="75%"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} style={{ minHeight: 700-146, height: window.innerHeight - 146, width: 460 }}>
                        {isregistersuccess?
                            <VerifyContainer/>
                        :isloading?
                            <div style={{ pointerEvents: 'none', cursor: 'default' }}>
                                <LoginContainer/>
                                <hr style={{ borderColor: "#333333"}}/>
                                <RegisterContainer/>
                            </div>
                          : <div>
                                <LoginContainer/>
                                <hr style={{ borderColor: "#333333"}}/>
                                <RegisterContainer/>
                            </div>
                        }
                    </Col>
                </div>
                <div className="row" style={{ height: 100, backgroundColor: 'white' }}>
                    <hr style={{margin: 0}}></hr>
                    <div style={{ marginLeft: 100}} className="btn"
                        onClick={()=> changeLanguage('VIETNAMESE')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguage('ENGLISH')}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        const { username } = this.props
        if(username){
            browserHistory.push('/profile');
        }
    }
}

export default LoginRegister;
