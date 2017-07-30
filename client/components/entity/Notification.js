import React from 'react'

class ContentNotify extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        const { onClick, type, content, name } = this.props
        switch (type) {
            case 'leadercomment':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>comment on a post</span>{" : \""}{content}{"\""}
                    </div>
                )
            case 'comment':
                return (
                    <div style={{ height: 35 }}>
                        <span style={{ fontWeight: 'bold'}}>{name}</span>
                        {" "}<span>reply on a post</span>{" : \""}{content}{"\""}
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

class Notification extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    onClick(){
        window.location = '/sellpost/'+this.props.sellpostid;
    }
    render(){
        const { id, type, avatarUrl, content, name, time, storename } = this.props
        return (
            <div className="btn" style={{ height: 60, padding: '5px 10px 5px 10px',
                display: 'inline-block',
                textAlign: 'left',
                width: '100%',
                borderRadius: 0,
                backgroundColor: this.state.hover?'#E5EAF2':'#EDF2FA'}}
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={() => this.onClick() }
                >
                <img src={avatarUrl} width={50} height={50}/>
                <div style={{ minHeight: 40, marginLeft: 60, marginTop: -50, fontSize: 13 }}>
                    <ContentNotify {...this.props}/>
                    <div style={{ fontSize: 12 }} >
                        {"at "}{storename}{" "}
                        <a style={{ fontSize: 12, color: '#A7ABB1' }}>{time}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification
