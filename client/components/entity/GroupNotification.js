import React from 'react'

import Notification from '~/containers/entity/Notification'

class GroupNotification extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, notifications } = this.props
        return(
            <div>
                {notifications.map((item) =>
                    <Notification key={item.id} id={item.id}/>
                )}
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetNotification()
    }
}

export default GroupNotification
