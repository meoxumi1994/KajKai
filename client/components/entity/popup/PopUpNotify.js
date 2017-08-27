import React from 'react'

import ContentShow from '~/components/entity/ContentShow'

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
            SELL_POST_2, IN_STORE, CHANGED_SELL_POST_IN_STORE, RECEIVED_TO,
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
        case 'createsellpost':
            return <img src="/images/notification/create.svg"
                    width={16} height={16} style={{ marginRight: 7 }}/>
        default:
            return <div></div>
    }
}

class PopUpNotify extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        const audio = new Audio('/audios/notify.mp3');
        audio.play();
        setTimeout(() => {
            this.props.onClose()
        },6000)
    }
    onClick(){
        const commentid = this.props.commentid || this.props.leadercommentid
        window.location = '/post/' + this.props.sellpostid + '/' + commentid;
    }
    render(){
        const { id, type, avatarUrl, content, name, time, storename, avartarStore, isclose, onClose, IN } = this.props
        if(!type || isclose) return <div></div>
        return(
            <div className="btn" style={{
                display: 'inline-block',
                textAlign: 'left',
                padding: 0,
                animationName: 'closepopup',
                animationDuration: '1s',
                animationDelay: '5s',
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: 5,
                backgroundColor: 'white',
                width: 280,
                height: 85, }}
                onClick={() => this.onClick() }
                >
                <div className="btn"
                    style={{ padding: 0, fontSize: 12, float: 'right' }}
                    onMouseOver={() => this.setState({ hoverRemove: true })}
                    onMouseLeave={() => this.setState({ hoverRemove: false })}
                    onClick={() => onClose()}>
                    <img src={this.state.hoverRemove ?
                        "/images/removehover.svg" : "/images/remove.svg"} height={10} width={10}/>
                </div>
                <img src={avatarUrl} width={50} height={50}/>
                <div style={{ minHeight: 40, marginLeft: 60, marginTop: -50, fontSize: 13 }}>
                    <div style={{ width: 200, height: 35, whiteSpace: 'pre-line' }}>
                        <ContentNotify {...this.props}/>
                    </div>
                </div>
                <div style={{ fontSize: 12, marginTop: 15, marginLeft: 40 }} >
                    <FirstIcon {...this.props}/>
                    {IN}<img src={avartarStore} width={14} height={14} style={{ marginLeft: 7, marginRight: 7 }}/>
                    {storename}{" . "}
                    <a style={{ fontSize: 12, color: '#80848C' }}>{time}</a>
                </div>
            </div>
        )
    }
}

export default PopUpNotify
