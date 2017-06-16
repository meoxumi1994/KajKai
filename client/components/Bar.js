import React from 'react';
import { Link } from 'react-router-dom';
import RiseUp from '~/components/entity/draw/RiseUp'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import ChatListContainer from '~/containers/chat/left/ChatListContainer'

const HandlerUser = ({ LOG_IN,
    id, isloading, isusername, avatarUrl, g, onLogoutClick, onLoadChatClick, setMultiChat}) => {
    if(isusername){
        return (
            <div style={{ marginLeft: 60, width: 145, float: 'left'}}>
                <div className="dropdown" style={{ float: 'left'}}>
                    <div className="btn btn-default btn-xs dropdown-toggle" id="chatDropDown" data-toggle="dropdown"
                        style={{ paddingLeft: 3, paddingRight: 3,
                            borderColor: 'white', paddingTop: 0, paddingBottom: 0, height: 31}} >
                        <RiseUp
                            src="./images/message.svg"
                            srcHas="./images/message.svg"
                            width="29" height="29" number="2"/>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropDown" style={{backgroundColor: '#e9ebee', borderRadius: 15, borderWidth: 1, borderColor: 'black'}}>
                        <ChatListContainer/>
                    </ul>
                </div>

                <div style={{marginLeft: 3, float: 'left'}}>
                    <RiseUp
                        src="./images/notification.svg"
                        srcHas="./images/notification.svg"
                        width="29" height="29" number="12"/>
                </div>

                <div className="dropdown" style={{ width : 15, float: 'right'}}>
                  <div className="btn btn-default btn-xs  dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"
                      style={{ paddingLeft: 3, paddingRight: 3,
                          borderColor: 'white', paddingTop: 0, paddingBottom: 0, height: 31}} >
                      <img src="./images/setting.svg" alt="Cinque Terre" width="24" height="27"/>
                </div>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1"
                      style={{ marginLeft: -100 }}>
                      <li><a href="#" onClick={()=> onLogoutClick() }>create store</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>setting</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>log out</a></li>
                  </ul>
              </div>

              <div className="btn btn-transparent btn-xs" style={{ padding: 0, float: 'right'}}>
                  <Link to={"/"+id} >
                      <img src={avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                  </Link>
              </div>

            </div>
        )
    }

    if(isloading){
        return (
            <div style={{ paddingTop: 4, paddingBottom: 3, paddingLeft: 10, paddingRight: 10 }}>
                <div className="clocker" >
                    <img src="./images/loader.svg" alt="Cinque Terre" width="22px" height="22px"/>
                </div>
            </div>
        )
    }

    return (
        <Link to="/register">
            <button className="btn btn-default btn-sm" type="button" >
                {LOG_IN}
            </button>
        </Link>
    )
}

const BarScreen = (props) => {
    const { SEARCH_PRODUCT, SEARCH_LOCATION, } = props
    return (
        <div className="container-fluid"
            style={{ position: 'fixed', zIndex: 1, left: 0, top: 0, backgroundColor: "white" }}>
            <div className="row" style={{ marginTop: 8, marginBottom: 7 }}>
                <div className="col-xs-1 col-md-1 col-md-offset-1">
                    <div style={{minWidth: 100 }}>
                        <div className="btn btn-transparent btn-xs">
                            <Link to="/">
                                <img src="./images/kajkai.svg" alt="Cinque Terre" width="27" height="27"/>
                            </Link>
                        </div>
                        <div className="btn btn-transparent btn-xs">
                            <Link to="/map">
                                <img src="./images/map.svg" alt="Cinque Terre" width="27" height="27"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xs-5 col-md-4">
                    <div className="input-group">
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-default btn-sm dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li><a href="#" key="1">Another action</a></li>
                          <li><a href="#" key="2">Another</a></li>
                          <li><a href="#" key="3">Something else here</a></li>
                          <li role="separator" className="divider"></li>
                          <li><a href="#">All</a></li>
                        </ul>
                      </div>
                      <input type="text" className="form-control input-sm" placeholder={SEARCH_PRODUCT}/>
                      <span className="input-group-btn">
                          <button className="btn btn-default btn-sm" type="button">
                              <i className="glyphicon glyphicon-search"></i>
                          </button>
                      </span>
                    </div>
                </div>
                <div className="col-xs-2 col-md-2">
                    <div className="input-group" style={{ minWidth: 200 }}>
                        <input type="text" className="form-control input-sm" placeholder={SEARCH_LOCATION} />
                        <span className="input-group-btn">
                            <button className="btn btn-default btn-sm" type="button" >
                                <i className="glyphicon glyphicon-map-marker"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-xs-3 col-md-3">
                    <HandlerUser {...props}/>
                </div>
            </div>
        </div>

    )
}

export default BarScreen;
