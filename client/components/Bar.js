import React from 'react';
import { Link } from 'react-router-dom';
import RiseUp from '~/components/entity/draw/RiseUp'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import DropDownSettingBar from '~/containers/entity/DropDownSettingBar'
import ChatLeftContainer from '~/containers/chat/left'
import AutoCompleteContainer from '~/containers/mapp/AutoCompleteContainer'
import DropDownNotification from '~/containers/entity/DropDownNotification'

class HandlerUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        $('#dropdownnotification').on('mousewheel DOMMouseScroll', function(e) {
          var scrollTo = null;
          if(e.type === 'mousewheel') {
             scrollTo = (e.originalEvent.wheelDelta * -1);
          }
          else if(e.type === 'DOMMouseScroll') {
             scrollTo = 40 * e.originalEvent.detail;
          }
          if(scrollTo) {
             e.preventDefault();
             $(this).scrollTop(scrollTo + $(this).scrollTop());
          }
        });
    }
    render(){
        const { LOG_IN, CREATE_STORE, HOME, SETTING, LOG_OUT,
            id, isloading, username, avatarUrl, g, onLogoutClick, onChange, numUnreaded,
            onLoadChatClick, setMultiChat, clicksetting, clickSetting, unreadChat, resetChatQuantity, height } = this.props
        if(username){
            return (
                <div>
                    {/* <div className="dropdown" style={{ padding: 0, float: 'right'}}>
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
                  </div> */}
                      {clicksetting &&
                          <div style={{ position: 'absolute', right: 20, top: 30  }}>
                              <DropDownSettingBar
                                  contents={[ CREATE_STORE, HOME, SETTING, LOG_OUT]}
                                  onClick={(index) => {
                                      if(index==3)
                                        onLogoutClick()
                                  }}
                              />
                          </div>
                        }
                      <div className="btn"
                          style={{ float: 'right', padding: 3 }}
                          onClick={() => clickSetting()} >
                          <img src="/images/setting.svg" alt="Cinque Terre" height={20}/>
                      </div>


                    <div className="btn btn-transparent btn-xs" style={{ marginRight: 10, padding: 0, float: 'right'}}>
                        <a href={"/user/"+id}>
                            <img src={avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                        </a>
                    </div>

                    <div style={{ marginRight: 25, float: 'right' }}>
                        <DropDownNotification {...this.props}/>
                    </div>
                    <div className="dropdown" style={{ marginRight: 3, float: 'right'}} onClick={() => resetChatQuantity()}>
                        <div className="btn btn-xs dropdown-toggle" id="chatDropDown" data-toggle="dropdown"
                            style={{ borderWidth: 0, padding: 0 }}
                            onMouseOver={() => this.setState({ hoverMessage: true })}
                            onMouseLeave={() => this.setState({ hoverMessage: false })}
                            >
                            <RiseUp
                                src= {unreadChat.quantity > 0 ? "/images/messagehas.svg" :
                                    (this.state.hoverMessage ? "/images/messagehover.svg" : "/images/message.svg")}
                                style={{
                                    width: 35,
                                    height: 29,
                                    imgWidth: 21,
                                    imgHeight: 21,
                                }}
                                number={unreadChat.quantity}/>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropDown" style={{width: 450, backgroundColor: 'white'}}>
                            <ChatLeftContainer/>
                        </ul>
                    </div>
                </div>
            )
        }

        if(isloading){
            return (
                <div style={{ paddingTop: 5, addingBottom: 3 }}>
                    {/* <div className="clocker" >
                        <img src="/images/loader.svg" alt="Cinque Terre" width="22px" height="22px"/>
                    </div> */}
                    <div style={{ marginLeft: -40 }} id="loaderr"></div>
                </div>
            )
        }

        return (
            <a href={"/register"}>
                <button className="btn btn-default btn-sm" type="button" >
                    {LOG_IN}
                </button>
            </a>
        )
    }
    componentDidMount(){
        console.log('componentDidMount HandlerUser')
    }
}

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, onClick, style } = this.props
        return(
            <li style={{
                borderTop: this.state.hover?'1px solid #282828':'1px solid transparent',
                borderBottom: this.state.hover?'1px solid #282828':'1px solid transparent',
                backgroundColor: this.state.hover?'#3B5998':'transparent' }} >
                <div className="btn"
                    style={{ width: '100%', padding: '0px 10px 0px 10px', display: 'inline-block', textAlign: 'left' }}
                    onClick={() => onClick()}
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    <div style={{
                        color: this.state.hover?'white':'black',
                        ...style
                    }}>
                        {name}
                    </div>
                </div>
            </li>
        )
    }
}

export default class BarScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.onLoadCategory()
        $('#dropdowncategory').on('mousewheel DOMMouseScroll', function(e) {
          var scrollTo = null;

          if(e.type === 'mousewheel') {
             scrollTo = (e.originalEvent.wheelDelta * -1);
          }
          else if(e.type === 'DOMMouseScroll') {
             scrollTo = 40 * e.originalEvent.detail;
          }

          if(scrollTo) {
             e.preventDefault();
             $(this).scrollTop(scrollTo + $(this).scrollTop());
          }
        });
    }
    clickSetting(){
        setTimeout(()=>{
            this.props.onChange('clicksetting', true)
        },1)
    }
    render() {
        const { SEARCH_PRODUCT, SEARCH_LOCATION, categories, onSearchTypeSelected, onKeyWordChanged, currentCategory,
             onLocationChanged, clicksetting, width, height } = this.props
        let inputSearchKeyWord
        return (
            <div
                style={{ position: 'fixed',
                width: '100%',
                backgroundColor: '#3B5998',
                zIndex: 10 }}>
                <div style={{ width: (width > 1100 + 300)? (width - 300) : width }}>
                    <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                        <div className="row" style={{ padding: 0, margin: 'auto',  width: 1100, marginTop: 9, marginBottom: 9 }}>
                            <div className="col-xs-2" style={{ padding: 0 }}>
                                <div>
                                    <div className="btn btn-transparent btn-xs" style={{ padding: 0 }}>
                                        <a href="/">
                                            <img src="/images/kajkai.svg" alt="Cinque Terre" width="27" height="27"/>
                                        </a>
                                    </div>
                                    {/* <div className="btn btn-transparent btn-xs" style={{ padding: 0, marginLeft: 10 }}>
                                        <Link to="/map">
                                            <img src="/images/map.svg" alt="Cinque Terre" width="27" height="27"/>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xs-5"  style={{ padding: 0, marginLeft: -23 }}>
                                <div className="input-group">
                                  <div className="input-group-btn">
                                    <div className="btn btn-default btn-sm dropdown-toggle"
                                        style={{ borderRadius: '2px 0px 0px 2px', borderWidth: 0, backgroundColor: '#F6F7F9'}}
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentCategory}{" "}
                                        <span className="caret"></span>
                                    </div>
                                    <ul className="dropdown-menu" style={{  }}>
                                        <Cell style={{ fontWeight: 'bold', }} name={"All Category"}
                                            onClick={() => onSearchTypeSelected('-1', "All Category")} />
                                        <hr style={{ margin: 0 }}/>
                                        <div id="dropdowncategory" style={{
                                            overflow: 'scroll', height: height - 200,
                                            }}>
                                            {categories.map(category =>
                                                <div key={category.id}>
                                                    <Cell style={{ marginLeft: 10 }}
                                                        key={category.id} name={category.name}
                                                        onClick={() => onSearchTypeSelected(category.id, category.name)} />
                                                    {category.secondCategories.map(secondCategory =>
                                                        <Cell key={secondCategory.id} style={{ marginLeft: 20 }}
                                                            name={secondCategory.name}
                                                            onClick={() => onSearchTypeSelected(secondCategory.id, secondCategory.name)} />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <hr style={{ margin: 0 }}/>
                                        <Cell style={{ fontWeight: 'bold' }} name={"Store"}
                                            onClick={() => onSearchTypeSelected('-2', "Store")} />
                                        <hr style={{ margin: 0 }}/>
                                        <Cell style={{ fontWeight: 'bold' }} name={"User"}
                                            onClick={() => onSearchTypeSelected('-3', "User")} />
                                    </ul>
                                  </div>
                                  <input ref={node => { inputSearchKeyWord = node }}
                                    className="form-control input-sm"
                                    placeholder={SEARCH_PRODUCT}
                                    style={{ border: 0,  outline: 'none', height: 28, fontSize: 13 }}
                                  type="text"
                                    onKeyDown={(e) => { if(e.keyCode == 13) {
                                        inputSearchKeyWord.blur()
                                        onKeyWordChanged(inputSearchKeyWord.value.trim())
                                    }}}
                                  />
                                  <span className="input-group-btn">
                                      <button className="btn btn-default btn-sm" type="button"
                                          style={{ borderRadius: '0px 2px 2px 0px',
                                          borderWidth: 0, backgroundColor: '#F6F7F9'}}>
                                          <i className="glyphicon glyphicon-search"></i>
                                      </button>
                                  </span>
                                </div>
                            </div>
                            <div className="col-xs-3">
                                <div className="input-group">
                                    <AutoCompleteContainer SEARCH_LOCATION={SEARCH_LOCATION}
                                      onLocationChanged={onLocationChanged}
                                    />
                                    <span className="input-group-btn" >
                                        <button className="btn btn-default btn-sm" type="button"
                                            style={{ borderRadius: '0px 2px 2px 0px',
                                            borderWidth: 0, backgroundColor: '#F6F7F9'}}>
                                            <i className="glyphicon glyphicon-map-marker"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {/* <div className="col-xs-3"  style={{ padding: 0}}>
                                <div className="input-group" style={{ marginLeft: 10 }}>
                                    <input ref={node => { inputSearchLocation = node }}
                                      type="text"
                                      className="form-control input-sm"
                                      placeholder={SEARCH_LOCATION}
                                      onKeyDown={(e) => {
                                        if(e.keyCode == 13) {
                                          onLocationChanged(inputSearchLocation.value.trim())
                                          inputSearchLocation.blur()
                                        }
                                      }}
                                    />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-sm" type="button" >
                                            <i className="glyphicon glyphicon-map-marker"></i>
                                        </button>
                                    </span>
                                </div>
                            </div> */}
                            <div className="col-xs-2"  style={{ padding: 0, marginLeft: 23 }}>
                                <div style={{ position: 'absolute', right: 0}}>
                                    <HandlerUser {...this.props} clickSetting={() => this.clickSetting()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: 0, borderColor: '#29487D'}}></hr>
            </div>
        )
    }
}
