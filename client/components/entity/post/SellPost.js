import React from 'react'
import { Link } from 'react-router-dom';

import TimeLine from '~/components/entity/draw/TimeLine'

import ContentEditable from '~/components/entity/ContentEditable'
import DropDown from '~/components/entity/DropDown'
import LikeShareComment from '~/components/entity/LikeShareComment'
import LikeGroup from '~/components/entity/LikeGroup'
import GroupComment from '~/containers/entity/GroupComment'
import CallComment from '~/containers/entity/CallComment'
import PostRow from '~/containers/entity/post/PostRow'

class SellPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: '',
        }
    }
    clickSetting(){
        setTimeout(()=>{
            this.props.onChange('clicksetting', true)
        },1)
    }
    render(){
        const { urlname, isOwner, ship, status, category, description, storename, avatarUrl, time,
            numfollow, likestatus, likeGroupContent, likes, numlike, beLike, likeContent,
            onLike, postrows, postrows_order, clicksetting, id, onFollow,
        } = this.props
        if(!likes)
            return (
                <div>
                    <TimeLine style={{ height: 400, width: 520, margin: '0px 0px 0px 0px'}}/>
                </div>
            )
        return(
            <div style={{
                borderRadius: 4,
                border: '1px solid #CCCCCC',
                boxShadow: '0px 0px 4px #CCCCCC',
                backgroundColor: 'white',
                width: 520, padding: 10,}}>
                <div>
                    <div
                        className="btn" style={{
                        float: 'right',
                        padding: 0}}>
                        <div className="btn" style={{margin: 0, marginTop: -13, marginRight: 10, padding: 0 }}
                            onClick={() => onFollow()}>
                            <img src="/images/hasfollow.svg" width={25}/>
                        </div>
                        <span
                            onMouseOver={() => this.setState({ hoversetting: true })}
                            onMouseLeave={() => this.setState({ hoversetting: false })}
                            onClick={() => this.clickSetting()}
                            className="glyphicon glyphicon-menu-down"
                            style={{
                                color:this.state.hoversetting?'#A9ACB3':'#BEC2C8',
                                fontSize: 12,
                            }}
                        />
                        {clicksetting &&
                            <DropDown
                                contents={['Report post','Block store']}
                                onClick={(index) => console.log(index)}
                                width={100}
                            />
                        }
                    </div>
                    <div>
                        <img src={avatarUrl} width={ship?60:40} height={ship?60:40}/>
                    </div>
                    <div style={{
                        marginTop: ship?-57:-40,
                        marginLeft: ship?70:50,
                        color: '#A7ABB1',
                        fontWeight: 'bold'}}>
                        <div className="btn" style={{ padding: 0 }}>
                            <a href={"/"+urlname} style={{ color: '#BD081C', fontWeight: 'bold'}}>{storename}</a>
                        </div>
                        {" : "}
                        <div className="btn" style={{ padding: 0 }}>
                            <a style={{ color: '#BD081C' }}>{category}</a>
                        </div>
                    </div>
                    {ship &&
                        <div style={{ marginLeft: ship?70:50, marginTop: -3, }}>
                            <span style={{ color: '#516EA7', fontWeight: 'bold'}} >Ship</span>
                            <span>{": "}</span>
                            <span style={{ fontSize: 12.5 }}>{ship}</span>
                        </div>
                    }
                    <div style={{
                        fontSize: 12,
                        marginLeft: ship?70:50,
                        color: '#A7ABB1',
                        }}>
                        {time}{" . "}{description}
                    </div>
                </div>
                {postrows_order.map((item,index) =>
                    <div key={index} style={{ paddingTop: 10 }}>
                        <PostRow id={item} sellpostId={id}/>
                    </div>
                )}
                <div style={{ height: 10 }}></div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: '6px 0px 6px 0px'}}>
                    <LikeShareComment
                        onLike={onLike}
                        onComment={() => console.log('onComment')}
                        onShare={() => console.log('onShare')}
                        beLike={beLike}/>
                </div>
                <hr style={{ margin: 0}}/>
                <div style={{ padding: '8px 0px 8px 0px'}}>
                    <LikeGroup
                        size={20}
                        content={likeContent}
                        typeLikes={likestatus}
                        other={19}
                        />
                </div>
                <hr style={{ margin: 0 }}/>
                <GroupComment id={id}/>
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
        if(this.props.needGetSellPost){
            this.props.onGetSellpost()
        }
    }
}

export default SellPost
