import React from 'react'
import { Link } from 'react-router-dom'
import { getSmallString } from '~/containers/support'

class RowDropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        const { src, content, onClick, link, isStore, item } = this.props
        if(item == 'hr')
            return <hr style={{ margin: 5 }}/>
        if(link)
            return(
                <Link to={link} style={{ textDecoration: 'none'}}>
                    <div className="btn"
                        onMouseOver={() => this.setState({ hover: true})}
                        onMouseLeave={() => this.setState({ hover: false })}
                        onClick={() => {
                            if(onClick) onClick()
                        }}
                        style={{
                            display: "block",
                            textAlign: "left",
                            borderRadius: 0,
                            width: 200,
                            borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                            borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                            backgroundColor: this.state.hover?'#3B5998':'white',
                            padding: '5px 10px 5px 10px',
                        }}>
                        {isStore && <img width={20} height={20} src={src}/>}
                        {" "}<span style={{ color: this.state.hover?'white':'black', fontSize: 13.5 }}>
                            {getSmallString(content,20)}
                        </span>
                    </div>
                </Link>
            )
        else {
            return(
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true})}
                    onMouseLeave={() => this.setState({ hover: false })}
                    onClick={() => {
                        if(onClick) onClick()
                    }}
                    style={{
                        display: "block",
                        textAlign: "left",
                        borderRadius: 0,
                        borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                        borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                        backgroundColor: this.state.hover?'#3B5998':'white',
                        padding: '5px 10px 5px 10px',
                    }}>
                    {isStore && <img width={20} height={20} src={src}/>}
                    {" "}<span style={{ color: this.state.hover?'white':'black', fontSize: 13.5}}>
                        {content}
                    </span>
                </div>
            )
        }
    }
}

class DropDownSettingBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: {},
            width: 0,
        }
    }
    render(){
        const { width, contents, onClick, storeList, id, onLogoutClick, clickSetting, CREATE_STORE, HOME, SETTING, LOG_OUT } = this.props
        return(
            <div className="dropdown" id="dropdownsetting">
                <div className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"
                    style={{ borderWidth: 0, padding: 0 }}
                    onMouseOver={() => this.setState({ hoverNotification: true })}
                    onMouseLeave={() => this.setState({ hoverNotification: false })}
                    onClick={() => {
                        onChange('numUnreaded', 0)
                        this.setState({ show: true })
                    }}>
                    <div className="btn"
                        style={{ float: 'right', padding: 3 }}
                        onClick={() => clickSetting()} >
                        <img src="/images/setting.svg" alt="Cinque Terre" height={20}/>
                    </div>
                </div>
                <ul className="dropdown-menu"
                    aria-labelledby="settingBarDropDown"
                    style={{ marginLeft: -170 , marginTop: 10, borderRadius: 0, backgroundColor: 'white'}}>
                    <div>
                        <RowDropDown link={"/registerstore"} content={CREATE_STORE}/>
                        {storeList.map((item,index) => {
                            return <RowDropDown key={index} isStore={true} link={"/"+item.urlname} src={item.avatarUrl} content={item.storename}/>
                        })}
                        <RowDropDown link={"/"} content={HOME}/>
                        <RowDropDown link={"/user/" + id + "/setting"} content={SETTING}/>
                        <RowDropDown item={"hr"}/>
                        <RowDropDown onClick={() => onLogoutClick()} content={LOG_OUT}/>
                        <img style={{ position: 'absolute', zIndex: 100000, right: 6,
                            top: -10, }}
                            src="/images/arrowTop.svg" width={20} height={10}/>
                        {/* <img style={{
                                position: 'absolute',
                                right: 15,
                                top: -6.8,
                            }}
                            width={18}
                            height={9}
                            src="/images/arrowupdropdown.svg"
                        /> */}
                    </div>
                </ul>
            </div>
        )
    }
}

export default DropDownSettingBar
