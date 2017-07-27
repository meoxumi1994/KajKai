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
        const { mesId, messagesMap,
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
                  <table>
                  {
                    messagesMap[mesId].map(
                        mes => {
                          let showAvatar = previousId == mes.id || mes.id == user.id? false:true
                          previousId = mes.id
                          return (
                              <div style={{width: '100%'}} key={JSON.stringify(mes)}>
                                <Message
                                    {...mes}
                                    user={mes.id == user.id? user: usersMap[mes.id]}
                                    styles={mes.id === user.id? styles.rightMsg: styles.leftMsg}
                                    showAvatar={showAvatar}/>
                              </div>
                          )
                        }
                  )}
                  </table>
              </div>
            }
          </div>
        )
    }
}

const styles = {
    mainDiv: {
      width: 320,
      height: 300,
      overflowY: 'scroll'
    },
    rightMsg: {
        imgDiv: {
            float: 'right',
        },
        imgIcon: {
            borderRadius: 50,
            borderWidth: 1,
            width: 40,
            height: 40
        },
        text: {
            textAlign: 'left',
        },
        bounds: {
            marginTop: 10,
            backgroundColor: '#cc3333',
            color: 'white',
            width: 200,
            paddingTop: 5,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            borderRadius: 10,
            float: 'right',
            marginLeft: 50
        },
        senderDiv: {
            color: 'grey',
            display: 'none'
        }
    },
    leftMsg: {
        imgDiv: {
            float: 'left',
        },
        imgIcon: {
            borderRadius: 50,
            borderWidth: 1,
            width: 40,
            height: 40
        },
        text: {
            marginLeft: 15,
        },
        bounds: {
            backgroundColor: '#e0e0e0',
            width: 200,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            borderRadius: 10
        },
        senderDiv: {
          color: 'grey'
        }
    },
}

export default MessageList
