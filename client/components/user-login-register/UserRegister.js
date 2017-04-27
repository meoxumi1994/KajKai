import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, Panel, HelpBlock, ControlLabel, Modal} from 'react-bootstrap';

import config from '../../config'
import allString from '../../config/allString'
import {flet} from '../../actions/support'

const verifyCharacterVietname = (username) => {
    username = username.toUpperCase();
    const VIETNAMESE_DIACRITIC_CHARACTERS = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ";

    var numspace = 0;
    var curdisspace = 0;
    var minspace = 10;
    for (let i = 0; i < username.length; i++) {
        let ok = false;
        if( username[i] == " ") {
            numspace++;
            if(minspace > curdisspace)
                minspace = curdisspace
            curdisspace = 0;
            continue;
        }
        curdisspace++;
        if( /^[A-Za-z]+$/.test(username[i]) ) continue;
        for (let j = 0; j < VIETNAMESE_DIACRITIC_CHARACTERS.length; j++) {
            if(username[i] == VIETNAMESE_DIACRITIC_CHARACTERS[j] ){
                ok = true;
                break;
            }
        }
        if(!ok) return false;
    }
    const isTwoSpace = username.search("  ") != -1;
    if( isTwoSpace || numspace > 5 || minspace < 2) return false;
    return true;
}

const checkUserName = (username) => {
    if(!isRegisterClick) return null;
    const length = username.length;
    if( length > 45 || length < 5 || (length > 0 && !verifyCharacterVietname(username)) ) return 'error'
    return null
}

const checkloginID = (loginID) => {
    if(!isRegisterClick) return null;
    const length = loginID.length;
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(loginID)
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginID)
    if( !ismail && !isphone ) return 'error'
    isMail = ismail
    return null
}

const checkPassword = (password) => {
    if(!isRegisterClick) return null;
    const length = password.length;
    if (0 <= length && length < 5 ) return 'error';
    return null
}

let isRegisterClick = false
let isMail = false

class UserRegister extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : 'tran duc minh',
            loginID : 'minhtdse02995@gmail.com',
            password : '123456',
            openUsernameError : false,
            openLoginIDError : false,
            openPasswordError : false,
            showModal: false,
        }
    }
    getValidationUserName() {
        return checkUserName(this.state.username)
    }
    getValidationloginID() {
        return checkloginID(this.state.loginID)
    }
    getValidationPassword() {
        return checkPassword(this.state.password)
    }
    handleChangeName(e){
        this.setState({ username: e.target.value });
        this.setState({
            openUsernameError: checkUserName(e.target.value) == 'error'
        });
    }
    handleChangeloginID(e){
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
    clickregisterUSER(){
        isRegisterClick = true
        if( this.getValidationUserName() == null && this.getValidationloginID() == null
            && this.getValidationPassword() == null ){
                let { username, loginID, password } = this.state;

                flet('/register',{
                    username : username,
                    loginID: loginID,
                    password: password,
                },{
                    status: 'wrong form|has already registered|success, verify now'
                })
                .then((res)=>{
                    this.setState({ showModal: true });
                })
                // this.props.onRegisterClick(username, loginID, password)
                //     .then((res)=> {
                //         console.log(res)
                //     })
        }else{
            this.setState({
                openUsernameError: checkUserName(this.state.username) == 'error',
                openLoginIDError: checkloginID(this.state.loginID) == 'error',
                openPasswordError: checkPassword(this.state.password) == 'error'
            });
        }
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render(){
        const getlanguage = (lang) => allString.get(this.props.language, lang)
        return (

            <div>
                <h3>{ getlanguage('CREATE_A_NEW_ACCOUNT') }</h3>
                <FormGroup
                controlId="username"
                validationState={this.getValidationUserName()}>
                    <FormControl
                    type="text"
                    value={this.state.username}
                    placeholder={ getlanguage('YOUR_NAME') }
                    onChange={this.handleChangeName.bind(this)}
                    />
                    <FormControl.Feedback />
                    {   this.state.openUsernameError &&
                        <HelpBlock > { getlanguage('NAME_WARNING') } </HelpBlock>
                    }
                </FormGroup>

                <FormGroup
                controlId="loginID"
                validationState={this.getValidationloginID()}>
                    <FormControl
                    type="text"
                    value={this.state.loginID}
                    placeholder={ getlanguage('EMAIL_OR_PHONE_NUMBER') }
                    onChange={this.handleChangeloginID.bind(this)}
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
                        <HelpBlock >{ getlanguage('PASSWORD_WARNING') }</HelpBlock>
                    }
                </FormGroup>

                {/* <div className="small">khi bạn đăng ký là đã đồng ý với tất cả{' '}
                    <span className="text-primary"
                        onClick={ ()=> this.setState({ openpanel : !this.state.openpanel }) }>điều khoản
                    </span>  của chúng tôi</div>
                <Panel collapsible expanded={this.state.openpanel}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel> */}

                <div className='small'>
                    <i className="fa fa-circle-o-notch fa-spin"
                        style={{ fontSize: 16, color: '#BD081C', zIndex: 1, position: 'absolute', marginTop: 10, marginLeft: 30 }}></i>
                    {allString.get('RULE')}
                </div>
                <Button bsStyle="success" onClick={this.clickregisterUSER.bind(this)}>{ getlanguage('CREATE_ACCOUNT') }</Button>
                <Modal show={ this.state.showModal } onHide={this.close.bind(this)} style={{ marginTop: 140 }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                        { getlanguage('REGISTER_MODAL_HEADER_WARNING') }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> <strong>{this.state.loginID}</strong></p>
                        <p>
                            { (isMail)? getlanguage('REGISTER_MODAL_EMAIL_WARNING'): getlanguage('REGISTER_MODAL_PHONE_WARNING') }
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>{ getlanguage('CLOSE')}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UserRegister;
