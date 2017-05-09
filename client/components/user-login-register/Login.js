import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import config from '../../config'
import allString from '../../config/allString'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const checkloginId = (loginId) => {
    if(!isLoginClick) return null;
    const length = loginId.length;
    // const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginId)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginId)
    if( !ismail && !isphone ) return 'error'
    return null;
}

const checkPassword = (password) => {
    if(!isLoginClick) return null;
    const length = password.length;
    if (0 <= length && length < 5 ) return 'error';
    return null;
}

let isLoginClick = false

class UserLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loginId : '',
            password : '',
            openLoginIdError : false,
            openPasswordError : false,
        }
    }
    getValIdationLoginId() {
        return checkloginId(this.state.loginId)
    }
    getValIdationPassword() {
        return checkPassword(this.state.password)
    }
    handleChangeLoginId(e){
        this.setState({ loginId: e.target.value });
        this.setState({
            openLoginIdError: checkloginId(e.target.value) == 'error'
        });
    }
    handleChangePassword(e){
        this.setState({ password: e.target.value });
        this.setState({
            openPasswordError: checkPassword(e.target.value) == 'error'
        });
    }
    clickLogin(){
        isLoginClick = true
        if( this.getValIdationLoginId() == null && this.getValIdationPassword() == null ){
            let { loginId, password } = this.state;
            this.props.onLoginClick( loginId, password )
        }else{
            this.setState({
                openLoginIdError: checkloginId(this.state.loginId) == 'error',
                openPasswordError: checkPassword(this.state.password) == 'error'
            });
        }
    }
    onRequestFacebook(){
    }
    onRequestGoogle(){
    }
    responseFacebook(response){
        this.props.onlogInFaceBookClick(response.accessToken)
    }
    responseGoogle(response){
        this.props.onlogInGoogleClick(response.tokenId)
    }
    render(){
        let { user } = this.props
        const getlanguage = (lang) => allString.get(user.language, lang)
        return (
            <div>
                <h3 style={{ marginTop: 10 }}>{ getlanguage('LOG_IN') }</h3>
                <FormGroup
                controlId="loginId"
                validationState={this.getValIdationLoginId()}>
                    <FormControl
                    type="text"
                    value={this.state.loginId}
                    placeholder={ getlanguage('EMAIL_OR_PHONE_NUMBER') }
                    onChange={this.handleChangeLoginId.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openLoginIdError &&
                        <HelpBlock >{ getlanguage('EMAIL_WARNING') }</HelpBlock>
                    }
                </FormGroup>

                <FormGroup
                controlId="password"
                validationState={this.getValIdationPassword()}>
                    <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder={ getlanguage('PASSWORD') }
                    onChange={this.handleChangePassword.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openPasswordError &&
                        <HelpBlock>{ getlanguage('PASSWORD_WARNING') }</HelpBlock>
                    }
                </FormGroup>
                <div className="btn btn-xs" style={{ padding: 0}}><a>{ getlanguage('FORGOT_PASSWORD') }</a></div>
                <div>
                    <div style={{  float: 'right' }}>
                        <FacebookLogin
                            appId="1146911615435353"
                            fields="name,email,picture"
                            textButton="Facebook"
                            onClick={ this.onRequestFacebook.bind(this) }
                            callback={this.responseFacebook.bind(this)}
                            cssClass="btn btn-social btn-default facebookcolor"
                            icon="fa-facebook"
                        />
                        {/* <GoogleLogin
                            clientId="450463283380-skt4llatg404ru1e2ra4hk6c0ie4ei64.apps.googleusercontent.com"
                            onRequest={ this.onRequestGoogle.bind(this) }
                            onSuccess={ this.responseGoogle.bind(this) }
                            onFailure={ (response) => console.error(response) }
                            className="btn btn-social btn-default facebookcolor"
                            style={{ marginLeft: 4 }}>
                              <span className="fa fa-google" style={{ color: '#C23321'}}></span>
                              <span style={{ color: '#C23321'}} >Google</span>
                         </GoogleLogin> */}
                    </div>
                    <button className="btn"
                        style={{ marginBottom: 7, backgroundColor: '#BD081C', color: 'white'}}
                        onClick={this.clickLogin.bind(this)}>
                        { getlanguage('LOG_IN') }
                    </button>
                </div>
            </div>
        )
    }
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

export default UserLogin;
