import React from 'react'
import ChatTopContainer from '~/containers/chat/top'
import MessageListContainer from '~/containers/chat/center/MessageListContainer'
import ChatBottomContainer from '~/containers/chat/bottom'

class ChatCenter extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      let { messagesMap, mesId, styles, chatListMap, setCurrentChat, visibility } = this.props

      if (mesId == undefined) {
        return (
          <div style={{textAlign: 'center', marginTop: 80}}><i>No conversation</i></div>
        )
      }

      const { usersKey, usersMap } = chatListMap[mesId]

      return (
        <div key={mesId} onClick={() => setCurrentChat(mesId)} style={{width: '100%', height: '100%'}}>
            <ChatTopContainer
                  usersMap={usersMap}
                  usersKey={usersKey}
                  mesId={mesId}
                  visibility={visibility}
                  styles={styles.top}/>
            <MessageListContainer
                  usersMap={usersMap}
                  messagesMap={messagesMap}
                  mesId={mesId}
                  styles={styles.center}/>
            <ChatBottomContainer
                  mesId={mesId}
                  styles={styles.bottom}/>
        </div>
      )
    }
}

export default ChatCenter
