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
          <div style={{textAlign: 'left', overflowY: 'scroll', height: 625}}>
              {chatListKey.map(mesId =>
                {
                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => getMessages(mesId)}
                      style={{backgroundColor: getTabColor(mesId, currentChat, unread)}}>
                          <div className="container-fluid">
                              <ChatContainer mesId={mesId}/>
                          </div>
                      </ul>
                  )
                }
              )}
              <button className="btn btn-default" style={{marginLeft: '42%', marginTop: 10}} onClick={() => getChat(lazyLoad.offset)}>
                    { lazyLoad.loadMore? 'Load more': 'Data is up to date' }
              </button>
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
