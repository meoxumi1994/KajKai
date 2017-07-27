import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'
import ReactDOM from 'react-dom'

class MessageList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const { bottom } = this.refs;
        bottom.scrollTop = bottom.scrollHeight - bottom.clientHeight;
    }

    render() {
        const { mesId,
                user, chatListMap, messagesMap,
                getMessages
              } = this.props

        let previousId
        const { usersMap } = chatListMap[mesId]

        return (
          <div style={styles.mainDiv} ref={"bottom"} >
            {
              messagesMap[mesId] == undefined?
              <div></div>
              :
              <div>
                  {
                    messagesMap[mesId].length > 0?
                    <p style={{textAlign:'center'}} onClick={() => getMessages(mesId, messagesMap[mesId][0].time)}><i>(Show more)</i></p>
                    : undefined
                  }
                  <ul style={{height: '100%', height: '100%'}} className="list-unstyled">
                      {
                        messagesMap[mesId].map(
                            mes => {
                              let showAvatar = previousId == mes.id || mes.id == user.id? false:true
                              previousId = mes.id
                              return (
                                  <li style={{width: '100%', height: '100%', marginBottom: 5}} key={JSON.stringify(mes)}>
                                      <Message
                                          {...mes}
                                          user={mes.id == user.id? user: usersMap[mes.id]}
                                          styles={mes.id === user.id? styles.rightMsg: styles.leftMsg}
                                          showAvatar={showAvatar}/>
                                  </li>
                              )
                            }
                      )}
                  </ul>
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
      overflowY: 'scroll',
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
            backgroundColor: '#cc3333',
            color: 'white',
            width: 200,
            padding: "5px 10px 10px 10px",
            borderRadius: 10,
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
            padding: "5px 10px 10px 10px",
            borderRadius: 10
        },
        senderDiv: {
          color: 'grey'
        }
    },
}

export default MessageList
