import React from 'react'

import ContentShow from '~/components/entity/ContentShow'
import ContentEditable from '~/components/entity/ContentEditable'
import DropDown from '~/components/entity/DropDown'
import LikeShareComment from '~/components/entity/LikeShareComment'
import LikeGroup from '~/components/entity/LikeGroup'
import GroupComment from '~/containers/entity/GroupComment'
import CallComment from '~/containers/entity/CallComment'

class MinorPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beLike: false,
            content: '',
        }
    }
    onLike(){
        this.setState({ beLike: !this.state.beLike })
    }
    clickSetting(){
        setTimeout(()=>{
            onChange('clicksetting', true)
        },1)
    }
    render(){
        const { name, avatarUrl, time, content, clicksetting, onChange } = this.props
        return(
            <div style={{
                borderRadius: 4,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                backgroundColor: 'white',
                width: 410, padding: 10,}}>
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
                        <img src={avatarUrl} width={40} height={40}/>
                    </div>
                    <div style={{ marginTop: -37,
                        marginLeft: 50,
                        color: '#365899',
                        fontWeight: 'bold'}}>{name}</div>
                    <div style={{
                        fontSize: 12,
                        marginLeft: 50,
                        color: '#A7ABB1',
                        }}>
                        {time}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <ContentShow
                            fontSize={13.5}
                            heightEachRow={16}
                            content={content}
                            handleChange={(e) => this.setState({ })}
                        />
                    </div>
                </div>
                <div style={{ height: 40, padding: '10px 0px 10px 0px'}}>
                    <LikeShareComment
                        onLike={() => this.onLike()}
                        onComment={() => console.log('onComment')}
                        onShare={() => console.log('onShare')}
                        beLike={this.state.beLike}/>
                </div>
                <hr style={{ margin: 0}}/>
                <div style={{ height: 38, padding: '9px 0px 9px 0px'}}>
                    <LikeGroup
                        size={20}
                        content={'You, Nguyễn Ngọc Dưỡng and 3 others'}
                        names={['You','Nam Hà','Nguyễn Hữu Nhật']}
                        typeLikes={['likeicon','love','haha','wow']}
                        other={19}
                        />
                </div>
                <hr style={{ margin: 0}}/>
                <GroupComment/>
            </div>
        )
    }
}

export default MinorPost
