import React from 'react';
import {Row,Col,Button,ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router'
import MapModal from './details/MapModal'
import Home from './details/Home'
import User from './details/User'
import UserRegister from './details/UserRegister'
import Store from './details/Store'
import StoreRegister from './details/StoreRegister'

var that;
export default class App extends React.Component{
    constructor(props){
        super(props);
        that = this;
        this.state = {
            name : '',
            showInMapModal : false,
            showProfileModal : false,
            showLoginUserModal : false,
            mainscreen : 'HOME',
            curstype : 'EARLY',
            urlavata : '/config/avatar.png'
        }
    }
    getMainScreen(screen){
        if(screen == 'HOME'){
            return (<Home/>);
        }
        if(screen == 'USER'){
            return (<User/>);
        }
        if(screen == 'USERREGISTER'){
            return (<UserRegister/>);
        }
        if(screen == 'STORE'){
            return (<Store/>);
        }
        if(screen == 'STOREREGISTER'){
            return (<StoreRegister/>);
        }
        return null;
    }
    getDynamicBar(curstype){
        if(curstype == 'EARLY'){
            return (
                <ButtonToolbar>
                    <Button onClick={()=> this.setState({ mainscreen : 'USERREGISTER' })}>Đăng Nhập</Button>
                </ButtonToolbar>
                );
        }
        if(curstype == 'NORMAL'){
            return (
                <ButtonToolbar>
                    <div className="btn btn-transparent btn-xs" onClick={()=> this.setState({ mainscreen : 'USER' })}>
                        <strong>{this.state.name}</strong>
                        &nbsp;
                        <img src={this.state.urlavata} className="img-rounded" alt="Cinque Terre" width="32" height="32"/>
                        &nbsp;
                    </div>
                    <Button onClick={()=> this.setState({ mainscreen : 'STOREREGISTER' })}>Tạo cửa hàng ngay</Button>
                </ButtonToolbar>
            );
        }
        if(curstype == 'HARD'){
            return (
                <ButtonToolbar>
                    <div className="btn btn-transparent btn-xs" onClick={()=> this.setState({ mainscreen : 'USER' })}>
                        <strong>{this.state.name}</strong>
                        &nbsp;
                        <img src={this.state.urlavata} className="img-rounded" alt="Cinque Terre" width="32" height="32"/>
                        &nbsp;
                    </div>
                    <Button onClick={()=> this.setState({ mainscreen : 'STORE' })}>Cửa hàng</Button>
                </ButtonToolbar>
            );
        }
        return null;
    }
    ShowInMap(){
        this.setState({ showInMapModal: true });
    }
    CloseMap(){
        this.setState({ showInMapModal : false })
    }
    render(){
        const BarScreen = {
            padding: 8
        }
        return(
            <div style={{ margin: '0px'}}>
                <div style={BarScreen}>
                    <Row>
                        <Col xs={9} md={9}>
                            <ButtonToolbar>
                                <div className="btn btn-transparent btn-xs" onClick={()=> this.setState({ mainscreen : 'HOME'})}>
                                    <img src="/config/kajkai.png" alt="Cinque Terre" width="27" height="27"/>
                                </div>
                                <div className="input-group" style={{width: 400}}>
                                    <input type="text" className="form-control input-md" placeholder="tìm kiếm sản phẩm ngay" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-md" type="button">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </span>
                                </div>
                                <div className="input-group" style={{width: 200}}>
                                    <input type="text" className="form-control input-md" placeholder="tại địa điểm" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-md" type="button" onClick={ this.ShowInMap.bind(this) }>
                                            <i className="glyphicon glyphicon-map-marker"></i>
                                        </button>
                                    </span>
                                </div>
                            </ButtonToolbar>
                        </Col>
                        <Col xs={3} md={3}>
                            { this.getDynamicBar(this.state.curstype) }
                        </Col>
                    </Row>
                </div>
                <hr style={{margin: 0}}></hr>
                {this.getMainScreen(this.state.mainscreen)}
                <MapModal showInMapModal={this.state.showInMapModal} CloseMap={this.CloseMap.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        window.$.ajax({
            url: '/user',
            success: function(data){
                if(data.user){
                    that.setState({ curstype : 'NORMAL' })
                    if(data.isavatar){
                        that.setState({ urlavata : '/data/' + data.user._id + '/avatar.jpg' })
                    }
                }
            }
        })
    }
}
