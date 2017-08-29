import React from 'react'
import { Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import Bundle from '../../common/Bundle'
import loadVerifyContainer from 'bundle-loader?lazy!../../containers/user-login-register/VerifyContainer'
import loadLoginContainer from 'bundle-loader?lazy!../../containers/user-login-register/LoginContainer'
import loadRegisterContainer from 'bundle-loader?lazy!../../containers/user-login-register/RegisterContainer'
import loadChangeLanguage from 'bundle-loader?lazy!../../containers/entity/row/ChangeLanguage'

const VerifyContainer = (props) => (
  <Bundle load={loadVerifyContainer}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const LoginContainer = (props) => (
  <Bundle load={loadLoginContainer}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const RegisterContainer = (props) => (
  <Bundle load={loadRegisterContainer}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const ChangeLanguage = (props) => (
  <Bundle load={loadChangeLanguage}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

const LoginRegister = ({
    KAJKAI_THANK, iswhoing, isusername, changeLanguage, isregistersuccess, isloading, id }) => {
    if(iswhoing)
        return <div></div>
    if(isusername)
        return <Redirect to={'/user/' + id}/>
    return (
        <div style={{ height: '100%', width: 1040, backgroundColor: '#F6F7F9'}}>
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
                <hr style={{ margin: 0 }}/>
                <div style={{ paddingTop: 10 }}>
                    <ChangeLanguage fontSize={14}/>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;
