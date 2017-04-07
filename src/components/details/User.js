import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock, Form, Panel , Row, Col, Modal} from 'react-bootstrap';

var that
export default class User extends React.Component {
    constructor(props){
        super(props)
        that = this
        this.state = {
            username : '',
            phone : '',
            urlavata : '/config/avatar.png',
            background : '/config/cover.png',
            address : '',
            curaddress : '',
            showAdressModal : false,
            showPhotoModal : false
        }
    }
    changeAdress(){
        this.setState({
            showAdressModal : false,
            address : this.state.curaddress
        });
    }
    handleChangeAdress(e){
        this.setState({ curaddress : e.target.value });
    }
    screenAdress(address){
        if(!address){
            return (
                <div>
                    <h4>Địa điểm hiện tại của bạn : </h4>
                    <button className="btn btn-default btn-sm" type="button"
                        onClick={()=> this.setState({ showAdressModal : true })}>
                        Hiện tại chưa có, Thêm ngay !
                    </button>
                </div>
            )
        }else{
            return (
                <div>
                    <h4>Địa điểm hiện tại : {address}</h4>
                    <button className="btn btn-default btn-sm" type="button"
                        onClick={()=> this.setState({ showAdressModal : true })}>
                        Đổi địa điểm
                    </button>
                </div>
            )
        }
    }
    handleChangeImage(e){

    }
    render(){
        return (
            <div style={{ margin: '0px'}}>
                <Row style={{ margin: '2px'}}>
                    <Col xs={0} md={1} >
                    </Col>
                    <Col xs={8} md={8} >
                        <Panel style={{ color: 'white',backgroundImage: `url(${this.state.background})` }}>
                            <Row>
                                <h1>{" "}</h1>
                                <h1>{" "}</h1>
                            </Row>
                            <Row>
                                <Col xs={9} md={11}>
                                    <img src={this.state.urlavata} className="img-rounded" width="70" height="70"/>
                                    <div>{this.state.username}</div>
                                </Col>
                                <Col xs={3} md={1}>
                                    <button className="btn btn-default btn-md" type="button"
                                        onClick={()=> this.setState({ showPhotoModal : true })}>
                                        <i className="glyphicon glyphicon-camera"></i>
                                    </button>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel>
                            <h4>Số điện thoại : {this.state.phone}</h4>
                        </Panel>
                        <Panel>
                            {this.screenAdress(this.state.address)}
                        </Panel>
                    </Col>
                    <Col xs={4} md={3}>
                        <h3>List Chat User</h3>
                    </Col>
                </Row>
                <Modal show={this.state.showPhotoModal} onHide={ ()=> this.setState({ showPhotoModal : false}) }>
                    <Modal.Header closeButton>
                        <Modal.Title>Ảnh đại diện</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method='POST' encType='multipart/form-data'>
                            <input type="file" name="pic" accept="image/*"
                                onChange={this.handleChangeImage.bind(this)}/>
                            <input type='submit' name='upload_btn' value='upload'/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.changeAdress.bind(this)}>Thay đổi</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showAdressModal} onHide={ ()=> this.setState({ showAdressModal : false}) }>
                    <Modal.Header closeButton>
                        <Modal.Title>Thay đổi địa điểm của bạn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl type="text"
                            value = {this.state.curaddress}
                            placeholder="nhập địa điểm ngay"
                            onChange={this.handleChangeAdress.bind(this)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.changeAdress.bind(this)}>Thay đổi</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    componentDidMount(){
        window.$.ajax({
            url: '/user',
            success: function(data){
                if(data){
                    that.setState({
                        username : data.user.username,
                        phone : data.user.phone,
                    })
                    if(data.isavatar){
                        that.setState({ urlavata : '/data/' + data.user._id + '/avatar.jpg' })
                    }
                }
            }
        })
    }
}
