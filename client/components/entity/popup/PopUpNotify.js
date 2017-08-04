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
    render(){
        const { id, type, avatarUrl, content, name, time, storename, avartarStore, isclose, onClose } = this.props
        if(!type || isclose) return <div></div>
        return(
            <div style={{
                animationName: 'closepopup',
                animationDuration: '1s',
                animationDelay: '5s',
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: 5,
                backgroundColor: 'white',
                width: 270,
                height: 85, }}>
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
                    <ContentNotify {...this.props}/>
                </div>
                <div style={{ fontSize: 12, marginTop: 15, marginLeft: 40 }} >
                    {type.substr(0,4) == 'like' &&
                        <img src="/images/reactting/like.svg" width={14} height={14} style={{ marginRight: 7 }}/>}
                    {"at"}<img src={avartarStore} width={14} height={14} style={{ marginLeft: 7, marginRight: 7 }}/>
                    {storename}{" "}
                    <a style={{ fontSize: 12, color: '#A7ABB1' }}>{time}</a>
                </div>
            </div>
        )
    }
}

export default PopUpNotify
