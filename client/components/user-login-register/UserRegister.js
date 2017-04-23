import React from 'react';
import { Button, FormGroup, FormControl, Panel } from 'react-bootstrap';

import config from '../../config'

class UserRegister extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            phone : '',
            password : '',
            openpanel: false
        }
    }
    getValidationName() {
        const length = this.state.name.length;
        const isspace = this.state.name.search("  ") != -1;
        if ( length > 6 && !isspace ) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    getValidationPhone() {
        const length = this.state.phone.length;
        const isnum = /^\d+$/.test(this.state.phone)
        if ( 8 < length && length < 14 && isnum ) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }

    getValidationPassword() {
        const length = this.state.password.length;
        if (length > 7) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    handleChangeName(e){
        this.setState({ name: e.target.value });
    }
    handleChangePhone(e){
        this.setState({ phone: e.target.value });
    }
    handleChangePassword(e){
        this.setState({ password: e.target.value });
    }
    clickregisterUSER(){
        console.log(config.getDomain() + '/api')
        fetch( config.getDomain() + '/api', {
          method: 'GET',
          credentials: 'include',
        })
        .then((res) => {
            console.log(res)
            // res.json().then(json => {
            //     if(config.ISTEST){
            //         console.log(json.type)
            //     }
            // })
        }, (err) => {
          console.log('error', err + "dispatch(loginResult('LOG_IN_FAILURE'))"  );
        //   dispatch(loginResult('LOG_IN_FAILURE'))
        })
    }

    render(){
        return (
            <div>
                <h3>Tạo Địa Chỉ Người Dùng Mới</h3>
                <FormGroup validationState={this.getValidationName()}>
                    <FormControl type='text' value={this.state.name}
                        placeholder='tên của bạn' onChange={this.handleChangeName.bind(this)}/>
                </FormGroup>
                <FormGroup validationState={this.getValidationPhone()}>
                    <FormControl type='text' value={this.state.phone}
                        placeholder='số điện thoại của bạn' onChange={this.handleChangePhone.bind(this)}/>
                </FormGroup>
                <FormGroup validationState={this.getValidationPassword()}>
                    <FormControl type='password' value={this.state.password}
                        placeholder='mật khẩu' onChange={this.handleChangePassword.bind(this)}/>
                </FormGroup>
                <div className="small">khi bạn đăng ký là đã đồng ý với tất cả{' '}
                    <span className="text-primary"
                        onClick={ ()=> this.setState({ openpanel : !this.state.openpanel }) }>điều khoản
                    </span>  của chúng tôi</div>
                <Panel collapsible expanded={this.state.openpanel}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel>
                <Button bsStyle="success" onClick={this.clickregisterUSER.bind(this)}>Đăng Ký Ngay</Button>
            </div>
        )
    }
}

export default UserRegister;
