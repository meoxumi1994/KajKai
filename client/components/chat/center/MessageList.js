import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'
import ReactDOM from 'react-dom'

class MessageList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            first: 0,
            last: 0,
            init: true,
        }
    }

    componentDidMount() {
        this.update()
        this.scrollToBottom(-1)
    }

    componentDidUpdate(prevProps, prevState) {
        const { messagesMap, mesId, messagesKey } = this.props
        const mes = messagesMap[mesId]
        if (Object.keys(mes).length == 0) {
            return
        }
        const first = messagesMap[mesId][0].time
        const last = messagesMap[mesId][Object.keys(mes).length - 1].time
        if (last > this.state.last) {
            this.scrollToBottom(-1)
            this.update()
        }
            // else if (first == this.state.first) {
            //     this.scrollToBottom(0)
            // } else {
            //     this.scrollToBottom(30)
            // }
        this.loading(false)
    }

    scrollListener(event) {
        const { scrollHeight, scrollTop, clientHeight } = event.target
        const { getMessages, mesId, messagesMap, messagesKey } = this.props
        if (scrollTop == 0) {
              this.loading(true)
              getMessages(mesId, messagesMap[mesId][0].time)
         }
    }

    scrollToBottom(value) {
        const { bottom } = this.refs
        if (value == -1) {
            bottom.scrollTop = bottom.scrollHeight - bottom.clientHeight
        } else {
            bottom.scrollTop = value
        }
    }

    loading(value) {
        this.state = {
            ...this.state,
            isLoading: value
        }
    }

    update() {
        const { getMessages, mesId, messagesMap } = this.props
        const mes = messagesMap[mesId]
        if (Object.keys(mes).length == 0) {
            return
        }
        const first = messagesMap[mesId][0].time
        const last = messagesMap[mesId][Object.keys(mes).length - 1].time
        this.state = {
            ...this.state,
            first,
            last,
        }
    }

    render() {
        const { mesId,
                user, chatListMap, messagesMap, hideAddMember,
                getMessages
              } = this.props

        let previousId
        const { usersMap, store } = chatListMap[mesId]

        let myUser
        if (store == undefined || store.ownerId != user.id) {
            myUser = user
        } else {
            myUser = {
                id: store.id,
                username: store.storeName,
                avatarUrl: store.avatarUrl
            }
        }
        return (
          <div style={styles.mainDiv} ref={"bottom"} onClick={() => hideAddMember(mesId)} onScroll={(event) => this.scrollListener(event)}>
            {
              messagesMap[mesId] == undefined || messagesMap[mesId].length == 0?
              <div></div>
              :
              <div>
                  {this.state.isLoading? <div id="loaderr" style={{height: 30}}/>: undefined}
                  <ul style={{height: '100%', height: '100%', marginTop: 5}} className="list-unstyled">
                      {
                        messagesMap[mesId].map(
                            mes => {
                              let showAvatar = previousId == mes.id || mes.id == myUser.id? false:true
                              previousId = mes.id
                              return (
                                  <li style={{width: '100%', height: '100%', marginBottom: 5}} key={JSON.stringify(mes)}>
                                      <Message
                                          {...mes}
                                          user={mes.id == myUser.id? myUser: usersMap[mes.id]}
                                          styles={mes.id === myUser.id? styles.rightMsg: styles.leftMsg}
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
      height: 280,
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
            width: 170,
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
            width: 170,
            padding: "5px 10px 10px 10px",
            borderRadius: 10
        },
        senderDiv: {
          color: 'grey'
        }
    },
}

export default MessageList
