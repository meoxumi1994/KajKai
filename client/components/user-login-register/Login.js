import React from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ForgotPassword from '~/containers/user-login-register/ForgotPassword'

const Login = (props) => {
    const {
        LOG_IN, EMAIL_WARNING, EMAIL_OR_PHONE_NUMBER, PASSWORD, PASSWORD_WARNING, FORGOT_PASSWORD,
        user, loginid, password, handleChange, onLoginClick,
        warningloginId, warningPassword, logInFaceBook, logInGoogle } = props
    return (
        <div>
            <h3 style={{ marginTop: 10 }}>{ LOG_IN }</h3>
            <div className={"form-group" + (warningloginId ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={loginid} placeholder={ EMAIL_OR_PHONE_NUMBER }
                    onChange={(e) => handleChange('loginid', e.target.value)}
                />
                <div className="help-block">
                    { warningloginId && EMAIL_WARNING }
                </div>
            </div>
            <div className={"form-group" + (warningPassword ?" has-error":"")}>
                <input type="password" className="form-control input-md"
                    value={password} placeholder={ PASSWORD }
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <div className="help-block">
                    { warningPassword && PASSWORD_WARNING }
                </div>
            </div>
            <ForgotPassword/>
            <div>
                <div style={{  float: 'right' }}>
                    <FacebookLogin
                        appId="1146911615435353"
                        fields="name,email,picture"
                        textButton="Facebook"
                        callback={ (res) => logInFaceBook(res.accessToken)}
                        cssClass="btn btn-social btn-default facebookcolor"
                        icon="fa-facebook"
                    />
                    <GoogleLogin
                        clientId="450463283380-skt4llatg404ru1e2ra4hk6c0ie4ei64.apps.googleusercontent.com"
                        onSuccess={ (res) => logInGoogle(res.tokenId) }
                        onFailure={ (response) => console.error(response) }
                        className="btn btn-social btn-default facebookcolor"
                        style={{ marginLeft: 4 }}>
                          <span className="fa fa-google" style={{ color: '#C23321'}}></span>
                          <span style={{ color: '#C23321'}} >Google</span>
                     </GoogleLogin>
                </div>
                <button className="btn"
                    style={{ marginBottom: 7, backgroundColor: '#BD081C', color: 'white'}}
                    onClick={() => onLoginClick(loginid, password)}>
                    { LOG_IN }
                </button>
            </div>
        </div>
    )
}

export default Login;
