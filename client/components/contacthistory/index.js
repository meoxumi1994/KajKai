import React from 'react'

import Comment from './comment'
import Message from './message'

const ContactHistory = ({}) => {
    return(
        <div className="panel panel-default"
            style={{ padding: 0, margin: 0, height: '100%', borderRadius: '0px 0px 0px 0px' }}>
            <Message/>
            <hr style={{ margin: 0}}/>
            <Comment/>
        </div>
    )
}

export default ContactHistory