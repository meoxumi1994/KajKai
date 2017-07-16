import React from 'react'
import { Link } from 'react-router-dom';

import ContentEditable from '~/components/entity/ContentEditable'
import DropDown from '~/components/entity/DropDown'
import LikeShareComment from '~/components/entity/LikeShareComment'
import LikeGroup from '~/components/entity/LikeGroup'
import GroupComment from '~/containers/entity/GroupComment'
import CallComment from '~/containers/entity/CallComment'
import PostRow from '~/containers/entity/post/PostRow'

const getLikeContent = (likes, numlike, yourid ) => {
    let likeContent = '';
    for(let i=0; i< likes.length; i++){
        if( likes[i].userid ==  yourid ){
            likeContent = 'You'
            break;
        }
    }
    for(let i=0; i< likes.length; i++){
        if( likes[i].userid !=  yourid ){
            if(likeContent != '') likeContent += ', '
            likeContent += likes[i].username
        }
    }
    if(likeContent != '') {
        likeContent += ' and ' + (numlike - likes.length) + ' another people'
    }else{
        likeContent += (numlike - likes.length) + ' people'
    }
    return likeContent;
}

const getBeLike = (likes, yourid) => {
    for(let i = 0; i< likes.length; i++)
        if( likes[i].userid ==  yourid )
            return true;
    return false;
}

class SellPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: '',
        }
    }
    clickSetting(){
        setTimeout(()=>{
            this.props.onChange('clicksetting', true )
        },1)
    }
    render(){
        const { urlname, isOwner, ship, status, category, description, storename, avatarUrl, time,
            numfollow, likestatus, likeGroupContent, likes, numlike, yourid, beLike,
            onLike, postrows, postrows_order, clicksetting,
        } = this.props
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
                        <PostRow id={item}/>
                    </div>
                )}
                <hr style={{ margin: 0, marginTop: 10 }}/>
                {/* <div style={{ padding: '6px 0px 6px 0px'}}>
                    <LikeShareComment
                        onLike={onLike}
                        onComment={() => console.log('onComment')}
                        onShare={() => console.log('onShare')}
                        beLike={getBeLike(likes, yourid)}/>
                </div> */}
                {/* <hr style={{ margin: 0}}/>
                <div style={{ padding: '8px 0px 8px 0px'}}>
                    <LikeGroup
                        size={20}
                        content={getLikeContent(likes, numlike, yourid)}
                        typeLikes={likestatus}
                        other={19}
                        />
                </div> */}
                <hr style={{ margin: 0, marginTop: 25}}/>
                <GroupComment/>
            </div>
        )
    }
}

export default SellPost
