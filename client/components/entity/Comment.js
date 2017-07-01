import React from 'react'

import Tooltip from '~/components/entity/Tooltip'
import DropDown from '~/components/entity/DropDown'

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover : false,
            hoversetting: false,
            clicksetting: false,
        }
    }
    componentDidMount(){
        $(window).click((event) => {
            this.setState({ clicksetting: false })
        });
    }
    onHoverSetting(){
        setTimeout(() => {

        }, 1000)
    }
    onCLickSetting(event){
        this.setState({
            clicksetting: true,
            hoversetting: false,
        })
        setTimeout(() => {
            this.setState({
                clicksetting: true,
                hoversetting: false,
            })
        }, 1)
    }
    render(){
        const {
            RECEIVE, LIKE, REPLY,
            isleader, avatar, name, time, numlikes, numreplys,
            content, onReceive, onLike, onReply} = this.props
        return(
            <div
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{
                marginLeft: isleader?0:38,
                paddingLeft: isleader?0:10,
                fontSize: 12.5,
                borderLeft: isleader?undefined:'2px solid #4080FF'}}>
                { (this.state.hover || this.state.clicksetting) &&
                    <div
                        style={{ float: 'right', padding: 2}}>
                        <span width={14} height={14}
                            onMouseOver={() => this.setState({ hoversetting: true })}
                            onMouseLeave={() => this.setState({ hoversetting: false })}
                            onClick={(event) => this.onCLickSetting(event)}
                            style={{ color:'#BEC2C8'}}
                            className="glyphicon glyphicon-menu-down"/>
                        {(this.state.hoversetting && !this.state.clicksetting)&&
                            <Tooltip contents={['Block, Report']}/>
                        }
                        {this.state.clicksetting &&
                            <DropDown
                                width={130}
                                onClick={(index) => console.log(index)}
                                contents={['Block','hr','Report']}
                            />
                        }
                    </div>
                }
                {this.state.hover &&
                    <div>

                    </div>
                }
                <img src={avatar} style={{
                    width: isleader?40:20,
                    height: isleader?40:20,
                }}/>
                <div style={{
                    marginLeft: isleader?50:30,
                    marginTop: isleader?-40:-20,
                    paddingRight: 18 }}>
                    <strong style={{ color: '#365899'}}>{name}</strong>{" "}
                    <span>{content}</span>
                    <div style={{ marginLeft: -2 }}>
                        {onReceive &&
                            <div className="btn" onClick={() => onReceive()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{ fontSize: 12, color: '#365899' }}>{RECEIVE}</a>
                            </div>
                        }
                        {onReceive && "."}
                        <div className="btn" onClick={() => onLike()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>{LIKE}</a>
                        </div>
                        {"."}
                        <div className="btn" onClick={() => onReceive()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>{REPLY}</a>
                        </div>
                        {"."}
                        <div className="btn" onClick={() => onReceive()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#A7ABB1' }}>{time}</a>
                        </div>
                    </div>
                </div>
                <div style={{ height: 10 }}></div>
            </div>
        )
    }
}

export default Comment