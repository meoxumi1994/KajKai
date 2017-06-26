import React from 'react'
import ChatTopContainer from '~/containers/chat/top'
import MessageListContainer from '~/containers/chat/center/MessageListContainer'
import ChatBottomContainer from '~/containers/chat/bottom'
import styles from '../styles'

class ChatCenter extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      let { messagesKey, path, currentChat, mesId, chatListMap, themes, setCurrentChat, isMultipleChat } = this.props

      if (messagesKey.length === 0) {
        return (
          <div>WAIT!!!</div>
        )
      }

      let chatStyle
      if (path == '/chat' || path == undefined) {
          mesId = currentChat
          chatStyle = styles(false, themes)
          // isMultipleChat(false)
      } else {
          chatStyle = styles(true, themes)
          // isMultipleChat(true)
      }

      const { usersKey, usersMap } = chatListMap[mesId]

      return (
        <div key={mesId} onClick={() => setCurrentChat(mesId)} style={{width: '100%', height: '100%'}}>
            <ChatTopContainer
                  usersMap={usersMap}
                  usersKey={usersKey}
                  mesId={mesId}
                  styles={chatStyle.top}/>
            <MessageListContainer
                  usersMap={usersMap}
                  mesId={mesId}
                  styles={chatStyle.center}/>
            <ChatBottomContainer
                  mesId={mesId}
                  styles={chatStyle.bottom}/>
        </div>
      )
    }
}

export default ChatCenter
