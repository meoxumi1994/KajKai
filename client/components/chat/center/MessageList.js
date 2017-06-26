import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

const MessageList = ({ messagesMap, user, mesId, usersMap, styles }) => {
    return (
      <div style={styles.mainDiv}>
        {
          messagesMap[mesId].map(
            mes =>
              <Message key={JSON.stringify(mes)}
                  {...mes}
                  user={mes.id == user.id? user: usersMap[mes.id]}
                  styles={mes.id === user.id? styles.rightMsg: styles.leftMsg}
              />
          )
        }
      </div>
    )
}

export default MessageList
