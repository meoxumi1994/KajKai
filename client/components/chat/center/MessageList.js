 import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

class MessageList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom();
    }

    scrollToBottom() {
      const { thing } = this.refs;
      thing.scrollTop = thing.scrollHeight - thing.clientHeight;
    }

    render() {
        const { mesId, messagesMap, styles,
                user, chatListMap,
                getMessages
              } = this.props

        let previousId
        const { usersMap } = chatListMap[mesId]

        return (
          <div style={styles.mainDiv} ref={"thing"}>
            {
              messagesMap[mesId] == undefined?
              <div></div>
              :
              <div>
                  {messagesMap[mesId].length > 0?
                    <p style={{textAlign:'center'}} onClick={() => getMessages(mesId, messagesMap[mesId][0].time)}><i>(Show more)</i></p>
                    : undefined
                  }
                  {messagesMap[mesId].map(
                    mes => {
                      let showAvatar = previousId==mes.id?false:true
                      previousId = mes.id
                      return (
                          <Message key={JSON.stringify(mes)}
                              {...mes}
                              user={mes.id == user.id? user: usersMap[mes.id]}
                              styles={mes.id === user.id? styles.rightMsg: styles.leftMsg}
                              showAvatar={showAvatar}/>
                      )
                    }
                  )}
              </div>
            }
          </div>
        )
    }
}

export default MessageList
