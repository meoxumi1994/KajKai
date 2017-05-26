import React from 'react'
import { Popover } from 'react-bootstrap'
import Waiting from './Waiting'
import ChatLog from './ChatLog'

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

const ChatLogs = (props) => {
  const { chatLog, currentUser, user } = props
  if (chatLog.length > 0)
      return (
        <div>
            {chatLog.reverse().map(chat =>
                user.id === JSON.parse(chat).id?
                <ChatLog
                  key={JSON.parse(chat).time}
                  {...JSON.parse(chat)}
                  user={user}
                  style={style.alignRight}
                />
                :
                <ChatLog
                  key={JSON.parse(chat).time}
                  {...JSON.parse(chat)}
                  user={currentUser}
                  style={style.alignLeft}
                />
            )}
        </div>
      )
  else
      return <Waiting/>
}

export default ChatLogs
