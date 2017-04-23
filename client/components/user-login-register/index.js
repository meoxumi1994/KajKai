import React from 'react'
import { Col } from 'react-bootstrap'


import UserRegister from './UserRegister'
import UserLogin from './UserLogin'
import UserLoginContainer from '../../containers/user-login-register/UserLoginContainer'
import UserRegisterContainer from '../../containers/user-login-register/UserRegisterContainer'

const UserLoginRegister = () => (
    <div className="container-fluid">
        <div className="row">
            <Col xs={6} sm={6} md={6} style={{ height: window.innerHeight - 46}}>
                <h3 className="text-center">KajKai cảm ơn các bạn đã quan tâm</h3>
                <div className="text-center">
                    <img src="/images/world.png" alt="Cinque Terre" width="75%"/>
                </div>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ backgroundColor: "white", height: window.innerHeight - 50 }}>
                <UserLoginContainer/>
                <UserRegister/>
            </Col>
        </div>
    </div>
)

export default UserLoginRegister;
