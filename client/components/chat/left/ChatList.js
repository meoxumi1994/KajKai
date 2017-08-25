import React from 'react'
import ChatContainer from '~/containers/chat/left/ChatContainer'

class ChatList extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.setUserId(this.props.userId)
    }
    render(){
        const { chatListMap, chatListKey, currentChat, unread, lazyLoad,
                createNewChat, getMessages, getChat
              } = this.props

        chatListKey.sort(function(a, b) {
            if (chatListMap[a].mesId == 0
                    || chatListMap[a].lastMessage == undefined
                    || chatListMap[b].lastMessage == undefined
                    || chatListMap[b] == undefined)
                return
            if (chatListMap[a].lastMessage.time > chatListMap[b].lastMessage.time) return -1
            if (chatListMap[a].lastMessage.time < chatListMap[b].lastMessage.time) return 1
        })

        return(
          <div style={{textAlign: 'left', overflowY: 'scroll', marginTop: 5, maxHeight: 600}}>
              {chatListKey.map(mesId =>
                {
                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => getMessages(mesId)}
                      style={{backgroundColor: getTabColor(mesId, currentChat, unread), borderTop: '0.1px solid #dbdbdb', height: 60, width: 364}}>
                              <ChatContainer mesId={mesId}/>
                      </ul>
                  )
                }
              )}
              <p style={{marginLeft: '43%', marginTop: 10, fontSize: 12}} onClick={() => getChat(lazyLoad.offset)}>
                    <a>Load more</a>
              </p>
          </div>
        )
    }
}

const getTabColor = (mesId, currentChat, unread) => {
    if (mesId == currentChat) {
        return '#cc3333'
    } else if (unread.messages.indexOf(mesId) != -1) {
        return '#dbdcdd'
    } else {
        return 'white'
    }
}

export default ChatList
