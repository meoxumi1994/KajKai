import React from 'react'

class Notification extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, type, avatarUrl, content } = this.props
        console.log('Notification', this.props)
        switch (type) {
            case 'leadercomment':
                return (
                    <div>
                        <img src={avatarUrl} width={40} height={40}/>
                        <div style={{ minHeight: 40, marginLeft: 50, marginTop: -40 }}>
                            {content}
                        </div>
                    </div>
                )
            default:
                return <div></div>
        }
        return(
            <div>
                <img src={avatarUrl} width={40} height={40}/>
                <div style={{ minHeight: 40, marginLeft: 50, marginTop: -40 }}>
                    {notification.content}
                </div>
            </div>
        )
    }
}

export default Notification
