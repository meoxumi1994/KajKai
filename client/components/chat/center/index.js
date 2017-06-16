import React from 'react'
import ChatTopContainer from '~/containers/chat/top'
import MessageList from './MessageList'
import ChatBottomContainer from '~/containers/chat/bottom'
import styles from '../styles'

const ChatCenter = ({ messagesMap, messagesKey, path, currentChat, user, mesId, chatListMap, setCurrentChat }) => {

    if (messagesKey.length === 0) {
      return (
        <div>WAIT!!!</div>
      )
    }

    let chatStyle
    if (path == '/chat' || path == undefined) {
        mesId = currentChat
        chatStyle = styles.bigWindow
    } else {
        chatStyle = styles.smallWindow
    }

    const { usersKey, usersMap } = chatListMap[mesId]

    return (
      <div key={mesId} style={styles.mainDiv} onClick={() => setCurrentChat(mesId)}>
          <ChatTopContainer currentChat={currentChat} mesId={mesId} usersMap={usersMap} usersKey={usersKey} user={user} styles={chatStyle}/>
          <MessageList styles={chatStyle} messagesMap={messagesMap} user={user} mesId={mesId} usersMap={usersMap}/>
          <ChatBottomContainer mesId={mesId} styles={chatStyle}/>
      </div>
    )
}

export default ChatCenter
