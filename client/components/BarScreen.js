import React from 'react';
import { Link } from 'react-router-dom';

const BarScreen = () => (
    <div className="container-fluid" style={{ backgroundColor: "white"}}>
        <div className="row" style={{ marginTop: 6, marginBottom: 6 }}>
            <div className="col-xs-2 col-md-1 col-md-offset-1">
                <div style={{minWidth: 100 }}>
                    <div className="btn btn-transparent btn-xs">
                        <Link to="/">
                            <img src="./images/kajkai.png" alt="Cinque Terre" width="27" height="27"/>
                        </Link>
                    </div>
                    <div className="btn btn-transparent btn-xs">
                        <Link to="/Map">
                            <img src="./images/map.png" alt="Cinque Terre" width="27" height="27"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-xs-4 col-md-4">
                <div className="input-group" role="group" style={{ minWidth: 280 }}>
                    {/* <DropdownButton bsSize="small" title="All " id="dropdownCategories">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton> */}
                    <input type="text" className="form-control input-sm" placeholder="tìm kiếm sản phẩm" />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-sm" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div className="col-xs-2 col-md-2">
                <div className="input-group" style={{ minWidth: 200 }}>
                    <input type="text" className="form-control input-sm" placeholder="tại địa điểm" />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-sm" type="button" >
                            <i className="glyphicon glyphicon-map-marker"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div className="col-xs-2 col-xs-offset-1 col-md-2 col-md-offset-1">
                <Link to="/register">
                    <button className="btn btn-default btn-sm" type="button" >
                        Đăng Nhập
                    </button>
                </Link>
            </div>
            <div className="col-xs-1 col-md-1">
                <div className="dropdown" style={{ width : 27 }}>
                  <button className="btn btn-xs btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" >
                      <img src="./images/setting.png" alt="Cinque Terre" width="15" height="27"/>
                  </button>
                  <ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">
                      <li className="dropdown-header">Your Store</li>
                      <li><a href="#">Store A</a></li>
                      <li className="dropdown-header">Your Profile</li>
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">Log out</a></li>
                  </ul>
              </div>
            </div>
        </div>
    </div>

)

export default BarScreen;
