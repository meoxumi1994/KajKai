 import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

const MessageList = ({ messagesMap, user, mesId, chatListMap, styles, getMessages, multiChat }) => {
    let previousId
    const { usersMap } = chatListMap[mesId]

    return (
      <div style={styles.mainDiv}>
        {
          messagesMap[mesId] == undefined?
          <div></div>
          :
          <div>
              {messagesMap[mesId].length > 0? <p style={{textAlign:'center'}} onClick={() => getMessages(mesId, true, 'update')}><i>(Show more)</i></p> : undefined}
              {messagesMap[mesId].map(
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
              )}
          </div>
        }
      </div>
    )
}

export default MessageList
