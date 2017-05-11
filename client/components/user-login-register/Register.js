import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { Button, FormGroup, FormControl, Panel, HelpBlock, ControlLabel, Modal} from 'react-bootstrap';

import config from '../../config'
import allString from '../../config/allString'
import { flet } from '../../actions/support'
import { checkUserName, checkPassword, checkEmail } from '../support'

let isRegisterClick = false

class UserRegister extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : 'meoxumi',
            loginID : 'minhtdse02995@gmail.com',
            password : '123456',
            openUsernameError : false,
            openLoginIDError : false,
            openPasswordError : false,
        }
    }
    getValidationUserName() {
        return checkUserName(this.state.username, isRegisterClick)
    }
    getValidationloginID() {
        return checkEmail(this.state.loginID, isRegisterClick)
    }
    getValidationPassword() {
        return checkPassword(this.state.password, isRegisterClick)
    }
    handleChangeName(e){
        this.setState({ username: e.target.value });
        this.setState({
            openUsernameError: checkUserName(e.target.value, isRegisterClick) == 'error'
        });
    }
    handleChangeloginID(e){
        this.setState({ loginID: e.target.value });
        this.setState({
            openLoginIDError: checkEmail(e.target.value, isRegisterClick) == 'error'
        });
    }
    handleChangePassword(e){
        this.setState({ password: e.target.value });
        this.setState({
            openPasswordError: checkPassword(e.target.value, isRegisterClick) == 'error'
        });
    }
    clickregisterUSER(){
        isRegisterClick = true
        if( this.getValidationUserName() == null && this.getValidationloginID() == null
            && this.getValidationPassword() == null ){
                let { username, loginID, password } = this.state;
                this.props.onRegisterClick(username, loginID, password)
        }else{
            this.setState({
                openUsernameError: checkUserName(this.state.username, isRegisterClick) == 'error',
                openLoginIDError: checkEmail(this.state.loginID, isRegisterClick) == 'error',
                openPasswordError: checkPassword(this.state.password, isRegisterClick) == 'error'
            });
        }
    }

    render(){
        const { g, user, auth, isloading, isshowmodalused, onCloseAlready } = this.props
        return (
            <div>
                <h3>{ g('CREATE_A_NEW_ACCOUNT') }</h3>
                <FormGroup
                validationState={this.getValidationUserName()}>
                    <FormControl
                    type="text"
                    value={this.state.username}
                    placeholder={ g('YOUR_NAME') }
                    onChange={this.handleChangeName.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openUsernameError &&
                        <HelpBlock > { g('USER_NAME_WARNING') } </HelpBlock>
                    }
                </FormGroup>

                <FormGroup
                controlId="loginID"
                validationState={this.getValidationloginID()}>
                    <FormControl
                    type="text"
                    value={this.state.loginID}
                    placeholder={ g('EMAIL_NEED') }
                    onChange={this.handleChangeloginID.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openLoginIDError &&
                        <HelpBlock >{ g('EMAIL_WARNING') }</HelpBlock>
                    }
                </FormGroup>

                <FormGroup
                controlId="password"
                validationState={ this.getValidationPassword() }>
                    <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder={ g('PASSWORD') }
                    onChange={this.handleChangePassword.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openPasswordError &&
                        <HelpBlock >{ g('PASSWORD_WARNING') }</HelpBlock>
                    }
                </FormGroup>

                <div className="small">khi bạn đăng ký là đã đồng ý với tất cả{' '}
                    <span className="text-primary"
                        onClick={ ()=> console.log('dieu khoan') }>điều khoản
                    </span>  của chúng tôi</div>

                <div className='small'>
                    {allString.get('RULE')}
                </div>
                <button className="btn"
                    style={{ backgroundColor: '#BD081C', color: 'white', width: 123}}
                    onClick={this.clickregisterUSER.bind(this)}>
                    {isloading?
                        <div className="loader" style={{ marginLeft: 40 }}></div>
                      : g('CREATE_ACCOUNT')
                    }
                </button>
                <Modal show={isshowmodalused}
                    style={{ marginTop: 100 }}
                    onHide={ () => onCloseAlready() }>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        { g('REGISTER_MODAL_HEADER_WARNING') }
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>{this.state.loginID}</strong>
                        <div>{ g('REGISTER_MODAL_PHONE_WARNING') }</div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={ () => onCloseAlready() }>{g('CLOSE')}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UserRegister;
