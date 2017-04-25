import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import logIn from '../../actions/auth'
import config from '../../config'
import allString from '../../config/allString'

const checkloginID = (loginID) => {
    if(!isLoginClick) return null;
    const length = loginID.length;
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginID)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginID)
    if( !ismail && !isphone ) return 'error'
    return 'success';
}

const checkPassword = (password) => {
    if(!isLoginClick) return null;
    const length = password.length;
    if (0 <= length && length < 5 ) return 'error';
    return 'success';
}

let isLoginClick = false

class UserLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loginID : 'bintele15@yahoo.com',
            password : '123456',
            openLoginIDError : false,
            openPasswordError : false,
        }
    }
    getValidationLoginID() {
        return checkloginID(this.state.loginID)
    }
    getValidationPassword() {
        return checkPassword(this.state.password)
    }
    handleChangeLoginID(e){
        this.setState({ loginID: e.target.value });
        this.setState({
            openLoginIDError: checkloginID(e.target.value) == 'error'
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
        if( this.getValidationLoginID() == 'success' && this.getValidationPassword() == 'success' ){
            let { loginID, password } = this.state;
            this.props.onLoginClick( loginID, password )
        }else{
            this.setState({
                openLoginIDError: checkloginID(this.state.loginID) == 'error',
                openPasswordError: checkPassword(this.state.password) == 'error'
            });
        }
    }

    render(){
        const getlanguage = (lang) => allString.get(this.props.language, lang)
        return (
            <div>
                <h3 style={{ marginTop: 10 }}>{ getlanguage('LOG_IN') }</h3>
                <FormGroup
                controlId="loginID"
                validationState={this.getValidationLoginID()}>
                    <FormControl
                    type="text"
                    value={this.state.loginID}
                    placeholder={ getlanguage('EMAIL_OR_PHONE_NUMBER') }
                    onChange={this.handleChangeLoginID.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openLoginIDError &&
                        <HelpBlock >Validation is based on string length.</HelpBlock>
                    }
                </FormGroup>

                <FormGroup
                controlId="password"
                validationState={this.getValidationPassword()}>
                    <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder={ getlanguage('PASSWORD') }
                    onChange={this.handleChangePassword.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openPasswordError &&
                        <HelpBlock >Validation is based on string length.</HelpBlock>
                    }
                </FormGroup>

                <div className="btn btn-xs" ><a>{ getlanguage('FORGOT_PASSWORD') }</a></div>
                <div>
                    <div style={{  float: 'right' }}>
                        <a  href={ config.getDomain() + "/auth/facebook" }
                            className="btn btn-social btn-facebook"
                            style={{ marginRight: 4 }}>
                            <span className="fa fa-facebook"></span>
                            Facebook
                        </a>
                        <a href={ config.getDomain() + "/auth/google" }
                            className="btn btn-social btn-google">
                            <span className="fa fa-google"></span>
                            Google
                        </a>
                    </div>
                    <button className="btn btn-success" style={{ marginBottom: 7 }} onClick={this.clickLogin.bind(this)}>
                        { getlanguage('LOG_IN') }
                    </button>
                </div>
            </div>
        )
    }
}

export default UserLogin;
