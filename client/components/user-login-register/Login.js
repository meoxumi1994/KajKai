import React from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
    const { user, g, loginid, password, handleChange, onLoginClick,
        warningloginId, warningPassword, logInFaceBook, logInGoogle } = props
    return (
        <div>
            <h3 style={{ marginTop: 10 }}>{ g('LOG_IN') }</h3>
            <div className={"form-group" + (warningloginId ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={loginid} placeholder={g('EMAIL_OR_PHONE_NUMBER')}
                    onChange={(e) => handleChange('loginid', e.target.value)}
                />
                <div className="help-block">
                    { warningloginId && g('EMAIL_WARNING')}
                </div>
            </div>
            <div className={"form-group" + (warningPassword ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={password} placeholder={g('PASSWORD')}
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <div className="help-block">
                    { warningPassword && g('PASSWORD_WARNING')}
                </div>
            </div>
            <div className="btn btn-xs" style={{ padding: 0}}><a>{ g('FORGOT_PASSWORD') }</a></div>
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
                    { g('LOG_IN') }
                </button>
            </div>
        </div>
    )
}

{/* <a  href={ config.getDomain() + "/auth/facebook" }
    className="btn btn-social btn-default"
    style={{ marginRight: 4 }}>
    <span className="fa fa-facebook" style={{ color: '#3b5998'}}></span>
    <span style={{ color: '#3b5998'}} >Facebook</span>
</a>
<a href={ config.getDomain() + "/auth/google" }
    className="btn btn-social btn-default">
    <span className="fa fa-google" style={{ color: '#C23321'}}></span>
    <span style={{ color: '#C23321'}} >Google</span>
</a> */}

{/* <a  href={ config.getDomain() + "/auth/facebook" }
   className="btn btn-social btn-default"
   style={{ marginRight: 4 }}>
   <span className="fa fa-facebook" style={{ color: '#3b5998'}}></span>
   <span style={{ color: '#3b5998'}} >Facebook</span>
</a> */}

export default Login;
