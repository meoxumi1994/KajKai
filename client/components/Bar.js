import React from 'react';
import { Link } from 'react-router-dom';
import RiseUp from '~/components/entity/draw/RiseUp'
import { DropdownButton, MenuItem } from 'react-bootstrap'
// import ChatListContainer from '~/containers/chat/left/ChatListContainer'
// import ChatLeftContainer from '~/containers/chat/left'

const HandlerUser = ({ LOG_IN,
    id, isloading, isusername, avatarUrl, g, onLogoutClick, onLoadChatClick, setMultiChat}) => {
    if(isusername){
        return (
            <div>
                <div className="dropdown" style={{ padding: 0, float: 'right'}}>
                    <div className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"
                        style={{ padding: 0, float: 'right', borderRadius: 0,
                            borderColor: 'white'}} >
                        <img src="/images/setting.svg" alt="Cinque Terre" style={{ height: 29 }}/>
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1"
                      style={{ marginLeft: -100 }}>
                      <li><a href="#" onClick={()=> onLogoutClick() }>create store</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>setting</a></li>
                      <li><a href="#" onClick={()=> onLogoutClick() }>log out</a></li>
                  </ul>
              </div>

                <div className="btn btn-transparent btn-xs" style={{ marginRight: 10, padding: 0, float: 'right'}}>
                    <Link to={"/user/"+id} >
                        <img src={avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                    </Link>
                </div>

                <div style={{ marginRight: 30, float: 'right' }}>
                    <RiseUp
                        src="/images/globe.svg"
                        style={{
                            width: 35,
                            height: 29,
                            imgWidth: 20,
                            imgHeight: 20,
                        }} number="12"/>
                </div>

                <div className="dropdown" style={{ marginRight: 10, float: 'right'}}>
                    <div className="btn btn-default btn-xs dropdown-toggle" id="chatDropDown" data-toggle="dropdown"
                        style={{ borderColor: 'white', padding: 0, height: 31}} >
                        <RiseUp
                            src="/images/message.svg"
                            style={{
                                width: 35,
                                height: 29,
                                imgWidth: 20,
                                imgHeight: 20,
                            }}
                            number="2"/>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropDown" style={{width: 450, backgroundColor: 'white'}}>
                        {/* <ChatLeftContainer multiChat={true}/> */}
                    </ul>
                </div>
            </div>
        )
    }

    if(isloading){
        return (
            <div style={{ paddingTop: 4, paddingBottom: 3, paddingLeft: 10, paddingRight: 10 }}>
                <div className="clocker" >
                    <img src="/images/loader.svg" alt="Cinque Terre" width="22px" height="22px"/>
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

export default class BarScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
      this.props.onLoadCategory()
  }

  render() {
    const { SEARCH_PRODUCT, SEARCH_LOCATION, categories, onSearchTypeSelected, onKeyWordChanged, onLocationChanged } = this.props
    let inputSearchKeyWord, inputSearchLocation
    return (
        <div
            style={{ position: 'fixed',
            width: '100%',
            backgroundColor: 'white',
            zIndex: 10}}>
            <div className="container-fluid">
                <div className="row" style={{ margin: 'auto',  minWidth: 860, marginTop: 9, marginBottom: 9 }}>
                    <div className="col-xs-1" style={{ padding: 0}}>
                        <div>
                            <div className="btn btn-transparent btn-xs" style={{ padding: 0 }}>
                                <Link to="/">
                                    <img src="/images/kajkai.svg" alt="Cinque Terre" width="27" height="27"/>
                                </Link>
                            </div>
                            <div className="btn btn-transparent btn-xs" style={{ padding: 0, marginLeft: 10 }}>
                                <Link to="/map">
                                    <img src="/images/map.svg" alt="Cinque Terre" width="27" height="27"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4"  style={{ padding: 0}}>
                        <div className="input-group">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-default btn-sm dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                              <li key="-1" onClick={() => onSearchTypeSelected('-1')}><a>ALL CATEGORY</a></li>
                              {categories.map(category =>
                                <ul key={category.id}>
                                  <li key={category.id} onClick={() => onSearchTypeSelected(category.id)}><a>{category.name}</a></li>
                                  {category.secondCategories.map(secondCategory =>
                                    <li key={secondCategory.id} onClick={() => onSearchTypeSelected(secondCategory.id)} style={{ marginLeft: 13}}><a>{secondCategory.name}</a></li>
                                  )}
                                </ul>
                              )}
                              <li key="-2" onClick={() => onSearchTypeSelected('-2')}><a>STORE</a></li>
                              <li key="-3" onClick={() => onSearchTypeSelected('-3')}><a>USER</a></li>
                            </ul>
                          </div>
                          <input ref={node => { inputSearchKeyWord = node }}
                            type="text"
                            className="form-control input-sm"
                            placeholder={SEARCH_PRODUCT}
                            onChange={() => onKeyWordChanged(inputSearchKeyWord.value.trim())}
                            onKeyDown={(e) => { if(e.keyCode == 13) inputSearchKeyWord.blur() }}
                          />
                          <span className="input-group-btn">
                              <button className="btn btn-default btn-sm" type="button">
                                  <i className="glyphicon glyphicon-search"></i>
                              </button>
                          </span>
                        </div>
                    </div>
                    <div className="col-xs-3"  style={{ padding: 0}}>
                        <div className="input-group" style={{ marginLeft: 10 }}>
                            <input ref={node => { inputSearchLocation = node }}
                              type="text"
                              className="form-control input-sm"
                              placeholder={SEARCH_LOCATION}
                              onKeyDown={(e) => {
                                if(e.keyCode == 13) {
                                  onLocationChanged(inputSearchLocation.value.trim())
                                  inputSearchKeyWord.blur()
                                }
                              }}
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-default btn-sm" type="button" >
                                    <i className="glyphicon glyphicon-map-marker"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-4"  style={{ padding: 0}}>
                        <div style={{ position: 'absolute', right: 0}}>
                            <HandlerUser {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0 }}></hr>
        </div>
    )
  }
}
