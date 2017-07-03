import React from 'react'
import ChatListContainer from '~/containers/chat/left/ChatListContainer'
import HeadContainer from '~/containers/chat/left/HeadContainer'

const ChatLeft = ({chatListKey}) => {
  return (
      <div>
          <HeadContainer/>
          <ChatListContainer/>
      </div>
  )
}

// {
//     chatListKey.length == 0?
//     <div style={{textAlign: 'left', height: 625, textAlign: 'center'}}>
//         <i>No recent chat</i>
//     </div>
//     :

export default ChatLeft
