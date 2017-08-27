import React from 'react'

import { Link } from 'react-router-dom'
import { getSmallString } from '~/containers/support'

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    render(){
        const { link, avatar, name, linkSetting, nameSetting, disabledLink, onClick, hover } = this.props
        const width = 190
        if(disabledLink){
            return(
                <div className="btn"
                    onClick={() => onClick()}
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    style={{ display: 'inline-block',
                    borderRadius: 2,
                    border: (this.state.hover || hover) ? '1px solid #DDDFE2': undefined,
                    boxShadow: (this.state.hover || hover) ? '0px 0px 1px #DDDFE2' : undefined,
                    backgroundColor: (this.state.hover || hover) ? '#F6F7F9' : undefined,
                    padding: (this.state.hover || hover) ? '4px 5px 6px 5px' : '5px 5px 5px 5px',
                    textAlign: 'left', width: width }}>
                    <img src={avatar} style={{ width: 20, height: 20 }}/>
                    <div style={{ marginLeft: 30, width: 140, marginTop: -20, color: '#4A4D54', fontSize: 13,
                        fontWeight: (this.state.hover || hover) ? 'bold': undefined, }}>
                        {getSmallString(name, 20)}
                    </div>
                    {((this.state.hover || hover) && linkSetting) &&
                        <div className="btn" style={{
                            position: 'absolute',
                            padding: 0,
                            height: 20, left: width - 27, marginTop: -20 }}>
                            <img src="/images/SettingLeft.svg" style={{ width: 20 }}/>
                        </div>
                    }
                </div>
            )
        }
        return(
            <Link to={link} >
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    style={{ padding: (this.state.hover || hover) ? '4px 5px 6px 5px' : '5px 5px 5px 5px',
                    borderRadius: 2,
                    border: (this.state.hover || hover) ? '1px solid #DDDFE2': undefined,
                    boxShadow: (this.state.hover || hover) ? '0px 0px 1px #DDDFE2' : undefined,
                    backgroundColor: (this.state.hover || hover) ? '#F6F7F9' : undefined,
                    textAlign: 'left', width: width }}>
                    <img src={avatar} style={{ width: 20, height: 20 }}/>
                    <div style={{ marginLeft: 30, width: 140, marginTop: -20, color: '#4A4D54', fontSize: 13,
                        fontWeight: (this.state.hover || hover) ? 'bold': undefined, }}>
                        {getSmallString(name, 20)}
                    </div>
                    {((this.state.hover || hover) && linkSetting) &&
                        <div className="btn" style={{
                            position: 'absolute',
                            padding: 0,
                            height: 20, left: width - 27, marginTop: -20 }}>
                            <img src="/images/SettingLeft.svg" style={{ width: 20 }}/>
                        </div>
                    }
                </div>
            </Link>
        )
    }
}

export default Cell
