import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'
import SendMessageContainer from '~/containers/chat/bottom/SendMessageContainer'

const style = {
  alignRight: {
    img: {
      float: 'right',
      marginRight: 20
    },
    text: {
      marginRight: 40,
      marginTop: 10,
      textAlign: 'right'
    }
  },
  alignLeft: {
    img: {
      float: 'left',
      marginLeft: 20,
    },
    text: {
      marginLeft: 40,
      marginTop: 10
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
      const { user, chatListKey, chatListMap, messagesKey, messagesMap, multipleChatWindow } = this.props
      return (
        <div>
          {
            messagesKey.map(
              mesId => {
                const { users } = chatListMap[mesId]
                return (
                  <div key={mesId}>
                      <h3><i>
                        Chat windows
                      </i></h3>
                      <div style={style.messageListDiv}>
                        {
                          messagesMap[mesId].map(
                            mes =>
                              <Message key={JSON.stringify(mes)}
                                  {...mes}
                                  user={users[mes.id]}
                                  style={mes.id === user.id? style.alignRight: style.alignLeft}
                              />
                          )
                        }
                      </div>
                      <SendMessageContainer mesId={mesId}/>
                  </div>
                )
              }
            )
          }
        </div>
      )
  }
}

export default MessageList
