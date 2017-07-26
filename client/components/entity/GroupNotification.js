import React from 'react'

import Notification from '~/containers/entity/Notification'

class Notification extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, notifications } = this.props
        console.log('notifications', notification)
        return(
            <div>
                {notifications.map((item) =>
                    <Notification key={item.id} id={item.id}/>
                )}
            </div>
        )
    }
}

export default Notification
