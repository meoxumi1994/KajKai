import React from 'react'
import { Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import VerifyContainer from '~/containers/user-login-register/VerifyContainer'
import LoginContainer from '~/containers/user-login-register/LoginContainer'
import RegisterContainer from '~/containers/user-login-register/RegisterContainer'


const LoginRegister = ({
    KAJKAI_THANK, iswhoing, isusername, changeLanguage, isregistersuccess, isloading, id }) => {
    if(iswhoing)
        return <div></div>
    if(isusername)
        return <Redirect to={'/' + id}/>
    return (
        <div className="container-fluid">
            <div className="row">
                <Col xs={6} sm={6} md={6} style={{ minHeight: 700-146, height: window.innerHeight - 146, backgroundColor: 'white'}}>
                    <div className="text-center">
                      <h2>
                          KajKai<small>{KAJKAI_THANK}</small>
                      </h2>
                    </div>
                    <div className="text-center">
                        <img src="/images/world.svg" alt="Cinque Terre" width="75%"/>
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

export default LoginRegister;
