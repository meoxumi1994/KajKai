import React from 'react'
import ChatListContainer from '~/containers/chat/left/ChatListContainer'
import HeadContainer from '~/containers/chat/left/HeadContainer'

const ChatLeft = ({multiChat}) => {
  return (
      <div>
          <HeadContainer/>
          <ChatListContainer addon={false}/>
      </div>
  )
}

export default ChatLeft
