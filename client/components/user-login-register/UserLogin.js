import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import logIn from '../../actions/auth'
import config from '../../config'

class UserLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loginID : '',
            password : '',
        }
    }
    getValidationLoginID() {
        const length = this.state.loginID.length;
        const isspace = this.state.loginID.search("  ") != -1;
        if ( length > 4 && !isspace ) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    getValidationPassword() {
        const length = this.state.password.length;
        if (length > 5) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    handleChangeLoginID(e){
        this.setState({ loginID: e.target.value });
    }
    handleChangePassword(e){
        this.setState({ password: e.target.value });
    }
    clickLogin(){
        console.log(" clickLogin ")
        close()
        // console.log(config.getDomain() + "/auth/google")
        // window.opener.location.href = config.getDomain() + "/auth/google";
        // window.close();
        // if(this.getValidationLoginID()=='success' && this.getValidationPassword()=='success'){
        //     console.log(this.state.loginID + " ------ " + this.state.password)
        //     this.props.onLoginClick(this.state.loginID, this.state.password);
        //     // this.props.dispatch(logIn(this.state.loginID, this.state.password))
        // }
    }
    render(){
        return (

            <div>
                <h3>Đăng Nhập</h3>
                <FormGroup validationState={this.getValidationLoginID()}>
                    <FormControl type='text' value={this.state.name}
                        placeholder='mail hoặc số điện thoại' onChange={this.handleChangeLoginID.bind(this)}/>
                </FormGroup>
                <FormGroup validationState={this.getValidationPassword()}>
                    <FormControl type='password' value={this.state.password}
                        placeholder='mật khẩu' onChange={this.handleChangePassword.bind(this)}/>
                </FormGroup>
                <button className="btn btn-success" style={{ marginBottom: 7 }} onClick={this.clickLogin.bind(this)}>
                    Đăng Nhập
                </button>
                <a
                    href={ config.getDomain() + "/auth/facebook" }
                    className="btn btn-block btn-social btn-facebook" style={{ width: 200 }}
                    // onClick={ this.clickLogin.bind(this) }
                    >

                    <span className="fa fa-facebook"></span> Sign in with Facebook
                </a>
                <a href={ config.getDomain() + "/auth/google" } className="btn btn-block btn-social btn-google" style={{ width: 200 }}>
                    <span className="fa fa-google"></span> Sign in with Google
                </a>
            </div>
        )
    }
}

export default UserLogin;
