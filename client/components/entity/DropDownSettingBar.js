import React from 'react'
import { Link } from 'react-router-dom'

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
                            borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                            borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                            backgroundColor: this.state.hover?'#3B5998':'white',
                            padding: '5px 10px 5px 10px',
                        }}>
                        {isStore && <img width={20} height={20} src={src}/>}
                        {" "}<span style={{ color: this.state.hover?'white':'black', fontSize: 13.5 }}>
                            {content}
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
        const { width, contents, onClick, storeList, id, onLogoutClick, CREATE_STORE, HOME, SETTING, LOG_OUT } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: '5px 0px 5px 0px',
                backgroundColor: 'white',
                position: 'absolute',
                zIndex: 1,
                width: 200,
                marginLeft: -168,
                marginTop: 9,
                fontSize: 12.5,
            }}>
                <RowDropDown link={"/registerstore"} content={CREATE_STORE}/>
                {storeList.map((item,index) => {
                    return <RowDropDown key={index} isStore={true}src={item.avatarUrl} content={item.storename}/>
                })}
                <RowDropDown link={"/"} content={HOME}/>
                <RowDropDown link={"/user/" + id + "/setting"} content={SETTING}/>
                <RowDropDown item={"hr"}/>
                <RowDropDown onClick={() => onLogoutClick()} content={LOG_OUT}/>
                <img style={{
                        position: 'absolute',
                        right: 15,
                        top: -6.8,
                    }}
                    width={18}
                    height={9}
                    src="/images/arrowupdropdown.svg"
                />
            </div>
        )
    }
}

export default DropDownSettingBar
