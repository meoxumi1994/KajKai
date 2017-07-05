 import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

const MessageList = ({ messagesMap, user, mesId, usersMap, styles }) => {
    let previousId

    return (
      <div style={styles.mainDiv}>
        {
          messagesMap[mesId] == undefined?
          <div></div>
          :
          messagesMap[mesId].map(
            mes => {
              let showAvatar = previousId==mes.id?false:true
              previousId = mes.id
              return (
                  <Message key={JSON.stringify(mes)}
                      {...mes}
                      user={mes.id == user.id? user: usersMap[mes.id]}
                      styles={mes.id === user.id? styles.rightMsg: styles.leftMsg}
                      showAvatar={showAvatar}/>
              )
            }
          )
        }
      </div>
    )
}

export default MessageList
