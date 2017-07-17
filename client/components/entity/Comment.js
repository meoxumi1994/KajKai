import React from 'react'

import Tooltip from '~/components/entity/Tooltip'
import DropDown from '~/components/entity/DropDown'
import ContentShow from '~/components/entity/ContentShow'


class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover : false,
            hoversetting: false,
        }
    }
    onCLickSetting(event){
        setTimeout(() => {
            this.props.onChange('clicksetting', true)
            this.setState({
                hoversetting: false,
            })
        }, 1)
    }
    render(){
        const {
            RECEIVE, LIKE, REPLY, clicksetting,
            isleader, avatarUrl, name, time, numlikes, numreplys,
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
                { (this.state.hover || clicksetting) &&
                    <div
                        style={{ float: 'right', padding: 2}}>
                        <span width={14} height={14}
                            onMouseOver={() => this.setState({ hoversetting: true })}
                            onMouseLeave={() => this.setState({ hoversetting: false })}
                            onClick={(event) => this.onCLickSetting(event)}
                            style={{ color:'#BEC2C8'}}
                            className="glyphicon glyphicon-menu-down"/>
                        {(this.state.hoversetting && !clicksetting)&&
                            <Tooltip contents={['Block, Report']}/>
                        }
                        {clicksetting &&
                            <DropDown
                                width={130}
                                onClick={(index) => console.log(index)}
                                contents={['Block','hr','Report']}
                            />
                        }
                    </div>
                }
                <img src={avatarUrl} style={{
                    width: isleader?40:20,
                    height: isleader?40:20,
                }}/>
                <div style={{
                    marginLeft: isleader?50:30,
                    marginTop: isleader?-40:-20,
                    paddingRight: 18 }}>
                    <strong style={{ color: '#365899'}}>{name}</strong>{" "}
                    <ContentShow
                        fontSize={13.5}
                        heightEachRow={16}
                        content={content}
                    />
                    <div style={{ marginLeft: -2 }}>
                        {onReceive &&
                            <div className="btn" onClick={() => onReceive()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{ fontSize: 12, color: '#365899' }}>{RECEIVE}</a>
                            </div>
                        }
                        {onReceive && "."}
                        {/* <div className="btn" onClick={() => onLike()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>{LIKE}</a>
                        </div>
                        {"."} */}
                        <div className="btn" onClick={() => onReply()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>{REPLY}</a>
                        </div>
                        {"."}
                        <div className="btn" style={{ padding: '0px 1px 0px 1px'}}>
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
