import React from 'react'

class Notification extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, notification } = this.props
        return(
            <div>
                <img src={notification.src} width={40} height={40}/>
                <div style={{ minHeight: 40, marginLeft: 50, marginTop: -40 }}>
                    {notification.content}
                </div>
            </div>
        )
    }
}

export default Notification
