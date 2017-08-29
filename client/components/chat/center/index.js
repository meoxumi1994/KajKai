import React from 'react'
import ChatTopContainer from '~/containers/chat/top'
import MessageListContainer from '~/containers/chat/center/MessageListContainer'
import ChatBottomContainer from '~/containers/chat/bottom'

class ChatCenter extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      const { mesId, messagesMap, readChat } = this.props

      if (mesId == undefined) {
          return (
              <div style={{textAlign: 'center', marginTop: 80}}><i>No conversation</i></div>
          )
      }

      return (
        <div style={{width: '100%', height: '100%'}} onClick={() => readChat(mesId)}>
            <ChatTopContainer
                  mesId={mesId}/>
            <MessageListContainer
                  mesId={mesId}/>
            <ChatBottomContainer
                  mesId={mesId}/>
        </div>
      )
    }
}



export default ChatCenter
