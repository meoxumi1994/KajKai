import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'
import ReactDOM from 'react-dom'

class MessageList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bottomScroller: true,
            time: 0,
            last: 0,
            isLoading: false
        }
    }

    listenScrollEvent(event) {
      console.log(this.state);
        const { scrollHeight, scrollTop, clientHeight } = event.target
        const { getMessages, mesId, messagesMap, messagesKey } = this.props
        if (scrollTop == 0) {
            getMessages(mesId, messagesMap[mesId][0].time)
            this.state = {
                ...this.state,
                bottomScroller: false,
                time: messagesMap[mesId][0].time,
                last: messagesMap[mesId][messagesKey.length-1].time,
                isLoading: true
            }
         } else {
            this.state = {
                ...this.state,
                bottomScroller: true
            }
        }
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const { bottom } = this.refs
        const { messagesMap, mesId, messagesKey } = this.props
        if (this.state.bottomScroller) {
            bottom.scrollTop = bottom.scrollHeight - bottom.clientHeight
        } else {
            if (messagesMap[mesId][0].time == this.state.time) {
                this.state = {
                    ...this.state,
                    isLoading: false,
                    bottomScroller: true
                }
                bottom.scrollTop = 0
            } else {
                bottom.scrollTop = 50
            }
        }

    }

    render() {
        const { mesId,
                user, chatListMap, messagesMap, hideAddMember,
                getMessages
              } = this.props

        let previousId
        const { usersMap, store } = chatListMap[mesId]
        console.log('this.state', this.state);
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
          <div style={styles.mainDiv} ref={"bottom"} onClick={() => hideAddMember(mesId)} onScroll={(event) => this.listenScrollEvent(event)}>
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

// {
//   messagesMap[mesId].length > 0?
//   <p style={{textAlign:'center'}} onClick={() => getMessages(mesId, messagesMap[mesId][0].time)}><i>(Show more)</i></p>
//   : undefined
// }

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
