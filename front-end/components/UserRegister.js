import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock, Form, Panel , Row, Col} from 'react-bootstrap';

var that
console.log(window.innerWidth);
export default class UserRegister extends React.Component {
    constructor(props){
        super(props)
        that = this
        this.state = {
            logphone : '',
            logpassword : '',
            resname : '',
            resphone : '',
            respassword : '',
            openpanel: false
        }
    }
    getValidationName() {
        const length = this.state.resname.length;
        const isspace = this.state.resname.search("  ") != -1;
        if ( length > 6 && !isspace ) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    getValidationPhone() {
        const length = this.state.resphone.length;
        const isnum = /^\d+$/.test(this.state.resphone)
        if ( 8 < length && length < 14 && isnum ) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    getValidationPassword() {
        const length = this.state.respassword.length;
        if (length > 7) return 'success';
        if ( 0 < length) return 'error';
        return null;
    }
    handleChangeName(e){
        that.setState({ resname: e.target.value });
    }
    handleChangePhone(e){
        that.setState({ resphone: e.target.value });
    }
    handleChangePassword(e){
        that.setState({ respassword: e.target.value });
    }
    clickregisterUSER(){
        if(this.getValidationName()=='success' && this.getValidationPassword()=='success' && this.getValidationPassword()=='success'){
            window.$.ajax({
                type: "POST",
                url: "/server/registeruser",
                data: {
                    username: this.state.resname,
                    phone: this.state.resphone,
                    password: this.state.respassword
                },
                success: function(data){
                    if(data == 'SUCCESS'){

                        var filedata = new FormData();
                        filedata.append( 'username', that.state.resphone );
                        filedata.append( 'password', that.state.respassword );
                        $.ajax({
                          url: '/login',
                          data: filedata,
                          processData: false,
                          contentType: false,
                          type: 'POST',
                          success: function(data){
                              window.location.replace('/');
                          }
                        });
                    }
                }
            });
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <Row>
                    <Col xs={6} sm={6} md={6} style={{ height: window.innerHeight - 50}}>
                        <h3 className="text-center">KajKai cảm ơn các bạn đã quan tâm</h3>
                        <div className="text-center">
                            <img src="/config/world.png" alt="Cinque Terre" width="75%"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} style={{ backgroundColor: "white", height: window.innerHeight - 50 }}>
                        <h3>Đăng Nhập</h3>
                        <form action="/login" method="post">
                            <FormGroup>
                                <FormControl type='text' ref='phone' placeholder='số điện thoại' name="username"/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type='text' ref='password' placeholder='mật khẩu' name="password"/>
                            </FormGroup>
                            <Button bsStyle="success" type="submit">Đăng Nhập</Button>
                        </form>
                        <h3>Tạo Địa Chỉ Người Dùng Mới</h3>
                        <FormGroup validationState={this.getValidationName()}>
                            <FormControl type='text' value={this.state.resname}
                                placeholder='tên của bạn' onChange={this.handleChangeName}/>
                        </FormGroup>
                        <FormGroup validationState={this.getValidationPhone()}>
                            <FormControl type='text' value={this.state.resphone}
                                placeholder='số điện thoại của bạn' onChange={this.handleChangePhone}/>
                        </FormGroup>
                        <FormGroup validationState={this.getValidationPassword()}>
                            <FormControl type='password' value={this.state.respassword}
                                placeholder='mật khẩu' onChange={this.handleChangePassword}/>
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
                    </Col>
                </Row>
            </div>
        )
    }
}
