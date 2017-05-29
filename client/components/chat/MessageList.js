import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

const style = {
  alignRight: {
    img: {
      float: 'right',
      marginRight: 20
    },
    text: {
      marginRight: 40,
      textAlign: 'right'
    }
  },
  alignLeft: {
    img: {
      float: 'left',
      marginLeft: 20,
    },
    text: {
      marginLeft: 40
    }
  },
  messageListDiv: {
    width: 900,
    height: 600,
    overflow: 'scroll'
  }
}

class MessageList  extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      const { chatLog, currentChat, user, visibility } = this.props
      return (
        <div style={{display: visibility}}>
          <h3><i>{currentChat.username}</i></h3>
          <div style={style.messageListDiv}  >
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
        </div>
      )
  }
}

export default MessageList
