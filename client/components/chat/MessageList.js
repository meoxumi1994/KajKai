import React from 'react'
import { Popover } from 'react-bootstrap'
import Message from './Message'

const style = {
  alignRight: {
    img: {
      float: 'right',
      marginRight: 140
    },
    text: {
      marginRight: 40,
      textAlign: 'right'
    }
  },
  alignLeft: {
    img: {
      float: 'left',
    },
    text: {
      marginLeft: 40
    }
  }
}

const MessageList = (props) => {
  const { chatLog, currentChat, user } = props
  if (chatLog.length > 0)
      return (
        <div>
            {chatLog.reverse().map(chat =>
                user.id === JSON.parse(chat).id?
                <Message
                  key={JSON.parse(chat).time}
                  {...JSON.parse(chat)}
                  user={user}
                  style={style.alignRight}
                />
                :
                <Message
                  key={JSON.parse(chat).time}
                  {...JSON.parse(chat)}
                  user={currentChat}
                  style={style.alignLeft}
                />
            )}
        </div>
      )
  else
      return <p><i>Select a conversation</i></p>
}

export default MessageList
