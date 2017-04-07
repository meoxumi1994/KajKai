import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock, Form, Panel , Row, Col} from 'react-bootstrap';

var that;
export default class StoreRegister extends React.Component{
    constructor(props){
        super(props);
        that = this
        this.state = {
            logphone : '',
            logpassword : '',
            resname : '',
            resphone : '',
            respassword : '',
            openpanel: false,
            isclick : false
        }
    }
    getValidationName() {
        if( !this.state.isclick ) return null;
        const length = this.state.resname.length;
        const isspace = this.state.resname.search("  ") != -1;
        if ( length > 6 && !isspace ) return 'success';
        else return 'error';
    }
    getValidationPhone() {
        if( !this.state.isclick ) return null;
        const length = this.state.resphone.length;
        const isnum = /^\d+$/.test(this.state.resphone)
        if ( 8 < length && length < 14 && isnum ) return 'success';
        else return 'error';
    }
    getValidationPassword() {
        if( !this.state.isclick ) return null;
        const length = this.state.respassword.length;
        if (length > 7) return 'success';
        else return 'error';
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
    render(){
        return(
            <div>
                <Row>
                    <Col xs={6} md={6}>
                        <h3 className="text-center">Tạo cửa hàng với KaiKai</h3>
                        <div className="text-center">
                            <img src="/config/kaikai_store.png" alt="Cinque Terre" width="70%"/>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3>Tạo Địa Chỉ Cửa Hàng Mới</h3>
                        <FormGroup validationState={this.getValidationName()}>
                            <FormControl type='text' value={this.state.resname}
                                placeholder='tên cửa hàng' onChange={this.handleChangeName}/>
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
                        <Button bsStyle="success">Đăng Ký Ngay</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
