import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import config from '../../config'
import allString from '../../config/allString'

const checkloginID = (loginID) => {
    if(!isLoginClick) return null;
    const length = loginID.length;
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginID)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginID)
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
            loginID : '',
            password : '',
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
        if( this.getValidationLoginID() == null && this.getValidationPassword() == null ){
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
                        <HelpBlock >{ getlanguage('EMAIL_OR_PHONE_WARNING') }</HelpBlock>
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
                        <HelpBlock>{ getlanguage('PASSWORD_WARNING') }</HelpBlock>
                    }
                </FormGroup>
                <div className="btn btn-xs" style={{ padding: 0}}><a>{ getlanguage('FORGOT_PASSWORD') }</a></div>
                <div>
                    <div style={{  float: 'right' }}>
                        <a  href={ config.getDomain() + "/auth/facebook" }
                            className="btn btn-social btn-default"
                            style={{ marginRight: 4 }}>
                            <span className="fa fa-facebook" style={{ color: '#3b5998'}}></span>
                            <span style={{ color: '#3b5998'}} >Facebook</span>
                        </a>
                        <a href={ config.getDomain() + "/auth/google" }
                            className="btn btn-social btn-default">
                            <span className="fa fa-google" style={{ color: '#C23321'}}></span>
                            <span style={{ color: '#C23321'}} >Google</span>
                        </a>
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

export default UserLogin;
