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
        return <Redirect to={'/user/' + id}/>
    return (
        <div style={{ height: '100%' }}>
            <div className="container-fluid" style={{ height: '100%'}}>
                <div className="row" style={{ height: '80%'}}>
                    <Col xs={6} sm={6} md={6} style={{ height: '100%', backgroundColor: 'white'}}>
                        <div className="text-center">
                          <h2>
                              KajKai<small>{KAJKAI_THANK}</small>
                          </h2>
                        </div>
                        <div className="text-center">
                            <img src="/images/world.svg" alt="Cinque Terre" width="75%"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} style={{ width: 460 }}>
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
                <div className="row" style={{ height: '20%', backgroundColor: 'white' }}>
                    <hr style={{margin: 0}}></hr>
                    <div style={{ marginLeft: 100}} className="btn"
                        onClick={()=> changeLanguage('vi')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguage('en')}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;
