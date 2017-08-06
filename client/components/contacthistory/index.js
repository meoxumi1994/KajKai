import React from 'react'

import ManagerComment from '~/containers/contacthistory/ManagerComment'
// import Message from './message'

const ContactHistory = ({ currentId }) => {
    return(
        <div className="panel panel-default"
            style={{ padding: 0, margin: 0, height: '100%', borderRadius: '0px 0px 0px 0px' }}>
            {/* <Message/>
            <hr style={{ margin: 0}}/> */}
            <ManagerComment/>
        </div>
    )
}

export default ContactHistory
