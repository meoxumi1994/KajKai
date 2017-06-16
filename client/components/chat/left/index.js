import React from 'react'
import ChatListContainer from '~/containers/chat/left/ChatListContainer'
import HeadContainer from '~/containers/chat/left/HeadContainer'

const ChatLeft = () => {
  return (
      <div>
          <HeadContainer/>
          <ChatListContainer/>
      </div>
  )
}

export default ChatLeft
