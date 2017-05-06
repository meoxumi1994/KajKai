import React from 'react';
import { Link } from 'react-router';

import allString from '~/config/allString'

const HandlerUser = (props) => {
    let { auth, user } = props
    const getlanguage = (lang) => allString.get(user.language, lang)

    if(user.username){
        return (
            <div style={{ width: 50}}>
                <div className="btn btn-transparent btn-xs" style={{ padding: 0}}>
                    <Link to="/profile" >
                        <img src={user.imageUrl} alt="Cinque Terre" width="29" height="29"/>
                    </Link>
                </div>
                <div className="dropdown" style={{ width : 15, float: 'right'}}>
                  <div className="btn btn-default btn-xs  dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"
                      style={{ paddingLeft: 3, paddingRight: 3,
                          borderColor: 'white', paddingTop: 0, paddingBottom: 0, height: 31}} >
                      <img src="./images/setting.png" alt="Cinque Terre" width="15" height="27"/>
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1"
                      style={{ marginLeft: -100 }}>
                      {/* <li className="dropdown-header">Your Store</li>
                      <li><a href="#">Store A</a></li>
                      <li className="dropdown-header">Your Profile</li>
                      <li><a href="#">Profile</a></li> */}
                      <li><a href="#" onClick={()=> props.onLogoutClick() }>Log out</a></li>
                  </ul>
              </div>
            </div>

        )
    }
    if(auth == 'WHO_ING' || auth == 'LOGIN_ING'){
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
                {getlanguage('LOG_IN')}
            </button>
        </Link>
    )
}

let that
class BarScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: "All",
        }
        that = this
    }
    onChangeCategory(value){
        that.setState({
            category: value,
        })
    }
    render(){
        let { user } = this.props
        const getlanguage = (lang) => allString.get(user.language, lang)
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
                                { this.state.category }{" "}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                              <li><a href="#" key="1"
                                  onClick={()=> that.onChangeCategory('Another action')}>Another action</a></li>
                              <li><a href="#" key="2"
                                  onClick={()=> that.onChangeCategory('Another')}>Another</a></li>
                              <li><a href="#" key="3"
                                  onClick={()=> that.onChangeCategory('Something else here')}>Something else here</a></li>
                              <li role="separator" className="divider"></li>
                              <li><a href="#">All</a></li>
                            </ul>
                          </div>
                          <input type="text" className="form-control input-sm" placeholder={ getlanguage('SEARCH_PRODUCT')}/>
                          <span className="input-group-btn">
                              <button className="btn btn-default btn-sm" type="button">
                                  <i className="glyphicon glyphicon-search"></i>
                              </button>
                          </span>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-2">
                        <div className="input-group" style={{ minWidth: 200 }}>
                            <input type="text" className="form-control input-sm" placeholder={ getlanguage('SEARCH_LOCATION')} />
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
                        <HandlerUser {...this.props}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default BarScreen;
