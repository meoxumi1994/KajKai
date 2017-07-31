import React from 'react'

import Notification from '~/containers/entity/Notification'

class GroupNotification extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, notifications, statenotification } = this.props
        return(
            <div style={{
                backgroundColor: 'white',
                width: 430,
                maxHeight: 600 }}>
                {notifications.map((item, index) =>
                    <div key={item.id} >
                        {index > 0 && <hr style={{ margin: 0 }}/>}
                        <Notification  id={item.id}/>
                    </div>
                )}
                {statenotification == 'GET_NOTIFICATION_ING' &&
                    <div>
                        <hr style={{ margin: 0 }}/>
                        <div style={{ marginTop: 20, marginBottom: 20 }} id="loaderr"></div>
                        <hr style={{ margin: 0 }}/>
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        if(this.props.notifications.length < 10 )
            this.props.onGetNotification()
    }
}

export default GroupNotification
