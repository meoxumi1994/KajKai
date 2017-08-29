import React from 'react'

import ContentShow from '~/components/entity/ContentShow'
import { Link } from 'react-router-dom'

const getString =  (str) => {
    if(!str) return ''
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,30) + ((newstr.length > 30)?'...':'')
}

class ContentNotify extends React.Component {
    constructor(props){
        super(props)

    }
    render(){

        const { onClick, type, status, content, name, order, isYourStore, isYourComment, isYourLeaderComment, leadercomment,
            ALSO_COMMENT_IN, ORDER_ON, A_SELL_POST_YOU_FOLLOW, YOUR_SELL_POST, SELF,
            REPLY_TO_COMMENT_OF, COMMENT_ON_A_SELL_POST, YOURS, IN_STORE_OF, LIKED_A, COMMENT_2,
            SELL_POST_2, IN_STORE, CHANGED_SELL_POST_IN_STORE, RECEIVED_TO, CREATE_NEW_STORE,
            ORDER, OF, MY_SELL_POST, CREATE_NEW_SELL_POST, CLOSED, OPENED,  } = this.props
        let storename = this.props.storename
        let commentName = this.props.commentName
        if(storename == name) storename = SELF
        if(commentName == name) commentName = SELF
        // console.log(this.props)
        switch (type) {
            case 'leadercomment':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            fontSize={13}
                            heightEachRow={16}
                            name={name}
                            colorname="#1D2129"
                            content={
                                (order.length>0 ? ORDER_ON : ALSO_COMMENT_IN) +
                                (order.length==0 ? ': "' + getString(content) + '"' : '') +
                                " " + IN_STORE_OF + " " +
                                (isYourStore ? YOURS : (storename != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+storename+'</span>' : storename)

                            }
                        />
                    </div>
                )
            case 'comment':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={
                                REPLY_TO_COMMENT_OF + " " + (isYourLeaderComment ? YOURS : ((commentName != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+commentName+'</span>' : commentName)) +
                                ': "' + getString(content) + '"' +
                                " " + IN_STORE_OF + " " +
                                (isYourStore ? YOURS : (storename != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+storename+'</span>' : storename)

                            }
                        />
                    </div>
                )
            case 'likesellpost':
                return (
                    <div style={{ fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={
                                LIKED_A + " " + SELL_POST_2 + " " + OF +
                                " " + IN_STORE_OF + " " +
                                (isYourStore ? YOURS : (storename != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+storename+'</span>' : storename)
                            }
                        />
                        {/* <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}{LIKED_A}{" "}{SELL_POST_2}{" "}{OF}{" "}{isYourStore ? YOURS : <span style={{ fontWeight: 'bold'}}>{storename}</span>} */}
                    </div>
                )
            case 'likecomment':
            case 'likeleadercomment':
                return (
                    <div style={{ fontSize: 13, }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={
                                LIKED_A + " " + COMMENT_2 + " " + OF + " " +
                                (isYourComment ? YOURS : ((commentName != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+commentName+'</span>' : commentName)) +
                                ': "' + getString(content) + '"' +
                                " " + IN_STORE_OF + " " +
                                (isYourStore ? YOURS : (storename != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+storename+'</span>' : storename)

                            }
                        />
                    </div>
                )
            case 'editsellpost':
                return (
                    <div style={{ fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={CHANGED_SELL_POST_IN_STORE}
                        />
                    </div>
                )
            case 'received':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={
                                RECEIVED_TO + " " + ((order && order.length > 0 ) ? ORDER: COMMENT_2) + " " +
                                OF + " " +
                                (isYourComment ? YOURS :
                                    ((commentName != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+commentName+'</span>' : commentName)
                                ) +
                                ': "' + getString(content) + '"' +
                                " " + IN_STORE_OF + " " +
                                (isYourStore ? YOURS : (storename != SELF) ? '<span style="font-weight: bold;color: #1D2129;">'+storename+'</span>' : storename)

                            }
                        />
                    </div>
                )
            case 'changestatus':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={
                                MY_SELL_POST + " " + (status == 'open' ? OPENED : CLOSED)
                            }
                        />
                    </div>
                )
            case 'createsellpost':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={CREATE_NEW_SELL_POST}
                        />
                    </div>
                )
            case 'createstore':
                return (
                    <div style={{  fontSize: 13,  }}>
                        <ContentShow
                            name={name}
                            colorname="#1D2129"
                            fontSize={13}
                            heightEachRow={16}
                            content={CREATE_NEW_STORE}
                        />
                    </div>
                )
            default:
                return (
                    <div style={{ height: 35 }}>
                        {/* {MY_SELL_POST}{status == 'open' ? OPENED : CLOSED } */}
                    </div>
                )
        }
    }
}

const FirstIcon = ({ type, order, status }) => {
    switch (type) {
        case 'leadercomment':
        case 'comment':
            if(order && order.length > 0)
                return <img src="/images/notification/order.svg"
                        width={16} height={16} style={{ marginRight: 7 }}/>
            return <img src="/images/notification/comment.svg"
                        width={14} height={14} style={{ marginRight: 7 }}/>
        case 'received':
            return <img src="/images/notification/received.svg"
                        width={16} height={16} style={{ marginRight: 7 }}/>
        case 'likesellpost':
        case 'likeleadercomment':
        case 'likecomment':
            return <img src="/images/notification/like.svg"
                        width={16} height={16} style={{ marginRight: 7 }}/>
        case 'editsellpost':
            return <img src="/images/notification/edit.svg"
                        width={16} height={16} style={{ marginRight: 7 }}/>
        case 'changestatus' :
            if(status == 'open')
                return <img src="/images/notification/open.svg"
                    width={16} height={16} style={{ marginRight: 7 }}/>
            else
                return <img src="/images/notification/close.svg"
                        width={16} height={16} style={{ marginRight: 7 }}/>
        case 'createstore':
        case 'createsellpost':
            return <img src="/images/notification/create.svg"
                    width={16} height={16} style={{ marginRight: 7 }}/>
        default:
            return <div></div>
    }
}

class Notification extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    onClick(){
        this.props.clickNotification()
        if(this.props.type == 'createstore'){
            this.props.history.push('/'+ this.props.urlname)
            return
        }
        const commentid = this.props.commentid || this.props.leadercommentid
        this.props.history.push('/post/' + this.props.sellpostid + '/' + commentid)
    }
    render(){
        const { id, type, avatarUrl, content, name, time, storename, avartarStore, isclick, IN } = this.props
        console.log(this.props)
        return (
            <div className="btn" style={{ height: 62, padding: '5px 10px 5px 10px',
                display: 'inline-block',
                textAlign: 'left',
                width: 430,
                borderRadius: 0,
                backgroundColor:  (this.state.hover? '#E5EAF2': (isclick ? 'white' : '#EDF2FA') ) }}
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={() => this.onClick() }
                >
                <img src={avatarUrl} width={50} height={50}/>
                <div style={{ minHeight: 40, marginLeft: 60, marginTop: -50, fontSize: 13,  }}>
                    <div style={{ width: 350, height: 35, whiteSpace: 'pre-line' }}>
                        <ContentNotify {...this.props}/>
                    </div>

                    <div style={{ fontSize: 12, color: '#80848C' }} >
                        <FirstIcon {...this.props}/>
                        {IN}<img src={avartarStore} width={14} height={14} style={{ marginLeft: 7, marginRight: 7 }}/>
                        {storename}{" . "}
                        <a style={{ fontSize: 12, color: '#80848C' }}>{time}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification
