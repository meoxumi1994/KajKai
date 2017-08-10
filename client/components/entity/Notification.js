import React from 'react'

import ContentShow from '~/components/entity/ContentShow'

const getString =  (str) => {
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,50) + ((newstr.length > 50)?'...':'')
}

class ContentNotify extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        const { onClick, type, content, name, order } = this.props
        switch (type) {
            case 'leadercomment':
                return (
                    <div style={{ height: 35, fontSize: 13 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {order.length>0 && " "}
                        {order.length>0 &&
                        <span>
                            has <span style={{ color: '#BD081C' }}>{order.length}
                            </span> {order.length>2 ? 'orders' : 'order'} {content && 'and'}
                        </span>}
                        {" "}<span>comment on a post </span>
                        {content &&
                        <ContentShow
                            fontSize={13}
                            heightEachRow={16}
                            content={getString(content)}
                        />}
                    </div>
                )
            case 'comment':
                return (
                    <div style={{ height: 35, fontSize: 13 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {order.length>0 && " "}
                        {order.length>0 &&
                        <span>
                            has <span style={{ color: '#BD081C' }}>{order.length}
                            </span> {order.length>2 ? 'orders' : 'order'} {content && 'and'}
                        </span>}
                        {" "}<span>reply on a post </span>
                        {content &&
                        <ContentShow
                            fontSize={13}
                            heightEachRow={16}
                            content={getString(content)}
                        />}
                    </div>
                )
            case 'likesellpost':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>like a sellpost </span>
                    </div>
                )
            case 'likeleadercomment':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>like a comment </span>
                    </div>
                )
            case 'likecomment':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>like a reply comment </span>
                    </div>
                )
            case 'editsellpost':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>edit sellpsot </span>
                    </div>
                )
            case 'received':
                return (
                    <div style={{ height: 35, fontSize: 13 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {order.length>0 && " "}
                        {order.length>0 &&
                        <span>
                            has <span style={{ color: '#BD081C' }}>{order.length}
                            </span> {order.length>2 ? 'orders' : 'order'} {content && 'and'}
                        </span>}
                        {" "}<span>has received a comment</span>
                        {content &&
                        <ContentShow
                            fontSize={13}
                            heightEachRow={16}
                            content={getString(content)}
                        />}
                    </div>
                )
            default:
                return (
                    <div style={{ height: 35 }}>
                    </div>
                )
        }
    }
}

const FirstIcon = ({ type, order }) => {
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
        // window.location = '/sellpost/'+this.props.sellpostid;
    }
    render(){
        const { id, type, avatarUrl, content, name, time, storename, avartarStore, isclick } = this.props
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
                <div style={{ minHeight: 40, marginLeft: 60, marginTop: -50, fontSize: 13 }}>
                    <ContentNotify {...this.props}/>
                    <div style={{ fontSize: 12, color: '#80848C' }} >
                        <FirstIcon {...this.props}/>
                        {"at"}<img src={avartarStore} width={14} height={14} style={{ marginLeft: 7, marginRight: 7 }}/>
                        {storename}{" . "}
                        <a style={{ fontSize: 12, color: '#80848C' }}>{time}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification
