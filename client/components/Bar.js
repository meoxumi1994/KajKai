import React from 'react';
import { Link } from 'react-router-dom';

const HandlerUser = ({ isloading, isusername, avatarUrl, g, onLogoutClick, onLoadChatClick}) => {
    if(isusername){
        return (
            <div style={{ width: 87, float: 'left'}}>
                <div style={{float: 'left'}} onClick={()=> onLoadChatClick() }>
                    <Link to="/chat" >
                        <img src="./images/comment.png" width="22.5" height="27"/>
                    </Link>
                </div>


                <div className="dropdown" style={{ width : 15, float: 'right'}}>
                  <div className="btn btn-default btn-xs  dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"
                      style={{ paddingLeft: 3, paddingRight: 3,
                          borderColor: 'white', paddingTop: 0, paddingBottom: 0, height: 31}} >
                      <img src="./images/setting.png" alt="Cinque Terre" width="22.5" height="27"/>
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1"
                      style={{ marginLeft: -100 }}>
                      <li><a href="#" onClick={()=> onLogoutClick() }>create store</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>setting</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>log out</a></li>
                  </ul>
              </div>

              <div className="btn btn-transparent btn-xs" style={{ padding: 0, float: 'right'}}>
                  <Link to="/profile" >
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
                    <img src="./images/loader.png" alt="Cinque Terre" width="22px" height="22px"/>
                </div>
            </div>
        )
    }
    return (
        <Link to="/register">
            <button className="btn btn-default btn-sm" type="button" >
                {g('LOG_IN')}
            </button>
        </Link>
    )
}

const BarScreen = (props) => {
    const {g} = props
    return (
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
            <div className="row" style={{ marginTop: 7, marginBottom: 6 }}>
                <div className="col-xs-1 col-md-1 col-md-offset-1">
                    <div style={{minWidth: 100 }}>
                        <div className="btn btn-transparent btn-xs">
                            <Link to="/">
                                <img src="./images/kajkai.png" alt="Cinque Terre" width="27" height="27"/>
                            </Link>
                        </div>
                        <div className="btn btn-transparent btn-xs">
                            <Link to="/map">
                                <img src="./images/map.png" alt="Cinque Terre" width="27" height="27"/>
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
                      <input type="text" className="form-control input-sm" placeholder={ g('SEARCH_PRODUCT')}/>
                      <span className="input-group-btn">
                          <button className="btn btn-default btn-sm" type="button">
                              <i className="glyphicon glyphicon-search"></i>
                          </button>
                      </span>
                    </div>
                </div>
                <div className="col-xs-2 col-md-2">
                    <div className="input-group" style={{ minWidth: 200 }}>
                        <input type="text" className="form-control input-sm" placeholder={ g('SEARCH_LOCATION')} />
                        <span className="input-group-btn">
                            <button className="btn btn-default btn-sm" type="button" >
                                <i className="glyphicon glyphicon-map-marker"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-xs-1 col-xs-offset-1 col-md-1 col-md-offset-1">

                </div>
                <div className="col-xs-2 col-md-2">
                    <HandlerUser {...props}/>
                </div>
            </div>
        </div>

    )
}

export default BarScreen;
