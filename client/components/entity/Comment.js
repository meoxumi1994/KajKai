import React from 'react'

import { Link } from 'react-router-dom'

import Tooltip from '~/components/entity/Tooltip'
import DropDown from '~/components/entity/DropDown'
import ContentShow from '~/components/entity/ContentShow'
import LikeGroup from '~/components/entity/LikeGroup'
import Product from '~/containers/entity/post/Product'

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
            RECEIVE, RECEIVED, LIKE, REPLY, DONE, NEW, BLOCK, clicksetting, isOwner, status, urlname, storeid,
            isleader, avatarUrl, name, time, numlike, numreplys, order, commenterid, type, match, address,
            content, onReceive, onDone, onLike, onReply, beLike, yourid } = this.props
        let urlLink
        if( type == "user" ){
            urlLink = "/user/" + commenterid
        }else {
            urlLink = urlname
        }
        // console.log(isleader , commenterid , yourid , isOwner , status == 'new' , order.length)
        return(
            <div
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{
                marginLeft: isleader?0:38,
                paddingLeft: isleader?0:10,
                fontSize: 12.5,
                borderLeft: isleader?undefined:'2px solid #DDDFE2'}}>
                {(this.state.hover || clicksetting) &&
                    <div
                        style={{ float: 'right', padding: 2}}>
                        <span width={14} height={14}
                            onMouseOver={() => this.setState({ hoversetting: true })}
                            onMouseLeave={() => this.setState({ hoversetting: false })}
                            onClick={(event) => this.onCLickSetting(event)}
                            style={{ color:'#BEC2C8'}}
                            className="glyphicon glyphicon-menu-down"/>
                        {(this.state.hoversetting && !clicksetting)&&
                            <Tooltip contents={[BLOCK+', '+DONE]}/>
                        }
                        {clicksetting &&
                            <DropDown
                                width={130}
                                onClick={(index) => {
                                    if(index == 0)
                                        this.props.onBlock()
                                    if(index == 2){
                                        this.props.onDone()
                                    }
                                }}
                                contents={[BLOCK,'hr',DONE]}
                            />
                        }
                    </div>
                }
                <Link to={urlLink}>
                    <div className="btn" onClick={() => window.scrollTo(0, 0)}
                        style={{ padding: 0 }}>
                        <img src={avatarUrl} style={{
                            width: isleader?35:20,
                            height: isleader?35:20,
                        }}/>
                    </div>
                </Link>
                <div style={{
                    marginLeft: isleader?45:30,
                    marginTop: isleader?-38:-23,
                    paddingRight: 18 }}>
                    <Link to={urlLink}>
                        <div className="btn" onClick={() => window.scrollTo(0, 0)}
                            style={{ padding: 0, marginTop: -3 }}
                            onMouseOver={() => this.setState({ hoverName : true })}
                            onMouseLeave={() => this.setState({ hoverName: false })}
                            >
                            <span href="" style={{
                                fontSize: 13.5,
                                color: '#365899',
                                fontWeight: 'bold',
                                textDecoration: this.state.hoverName? 'underline' : undefined ,
                            }}>{name}{" "}</span>
                        </div>
                    </Link>
                    {order &&
                        <table>
                            {order.map((item,index) => {
                                return (
                                    <tbody key={item.id+index} style={{ marginBottom: 5 }}>
                                        <Product id={item.id} index={index} justShow={true} ShowNum={true} num={item.num}
                                            canRemove={true} width={index?120:160}/>
                                    </tbody>
                                )
                            })}
                        </table>
                    }
                    <ContentShow
                        fontSize={13.5}
                        heightEachRow={16}
                        content={content}
                        match={match}
                    />
                    <div style={{ marginLeft: -2 }}>
                        {(isleader && (commenterid != storeid) &&
                            (commenterid != yourid || !isOwner) && status == 'new' && order.length > 0 ) &&
                            <div className="btn"
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    color: '#BD081C',
                                }}>{(status=='received')? NEW : NEW}</a>
                            </div>
                        }
                        {(isleader && (commenterid != storeid) &&
                            (commenterid != yourid || !isOwner) && status == 'new' && order.length > 0 ) && "."}

                        {(isOwner && isleader && onReceive && commenterid != yourid && status != 'done') &&
                            <div className="btn" onClick={() => onReceive()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{
                                    fontWeight: (status=='received') ? 'bold' : 'normal',
                                    fontSize: (status=='received') ? 12 : 12,
                                    color: (status=='received') ? '#42B72A' : '#365899',
                                }}>{(status=='received')? RECEIVED : RECEIVE}</a>
                            </div>
                        }
                        {(isOwner && isleader && onReceive && commenterid != yourid && status != 'done' ) && "."}

                        {(!isOwner && isleader && status=='received' ) &&
                            <div className="btn"
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    color: '#42B72A',
                                }}>{RECEIVED}</a>
                            </div>
                        }
                        {(!isOwner && isleader && status=='received' ) && "."}

                        <div className="btn" onClick={() => onLike()}
                            style={{ padding: '0px 1px 0px 1px', fontWeight: beLike?'bold':'normal'}}>
                            <a style={{ fontSize: beLike?12:12, color: beLike?'#5890FF':'#365899' }}>{LIKE}</a>
                        </div>
                        {"."}
                        <div className="btn" onClick={() => onReply()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>{REPLY}</a>
                        </div>
                        {numlike> 0 && "."}
                        {numlike> 0 &&
                            <div style={{ display: 'inline-block', padding: '0px 1px 0px 1px'}}>
                                <LikeGroup
                                    size={18}
                                    content={numlike}
                                    typeLikes={["like"]}
                                    other={19}
                                    />
                            </div>
                        }
                        {"."}
                        {(isOwner && isleader && (status=='received' || status=='done')) &&
                            <div className="btn" onClick={() => onDone()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{
                                    fontSize: 12,
                                    color: (status=='done') ? '#91959D' : '#365899',
                                }}>{(status=='received')? DONE : DONE}</a>
                            </div>
                        }
                        {(isOwner && isleader && (status=='received' || status=='done')) && "."}

                        {(!isOwner && isleader && (status=='done')) &&
                            <div className="btn" onClick={() => onDone()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{
                                    fontSize: 12,
                                    color: '#91959D',
                                }}>{DONE}</a>
                            </div>
                        }
                        {(!isOwner && isleader && (status=='done')) && "."}

                        <div className="btn" style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#91959D' }}>{time}</a>
                        </div>

                        {address && "."}
                        {address &&
                            <div className="btn" style={{ padding: '0px 1px 0px 1px'}}>
                                <a style={{ fontSize: 12, color: '#91959D' }}>{address}</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment
