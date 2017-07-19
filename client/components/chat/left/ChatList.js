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
        const { chatListMap, chatListKey, currentChat, multiChat} = this.props
        const { createNewChat, getMessages } = this.props

        // chatListKey.sort(function(a, b) {
        //     if (chatListMap[a].mesId == 0 || chatListMap[a].lastMessage == undefined) return
        //     if (chatListMap[a].lastMessage.time > chatListMap[b].lastMessage.time) return -1
        //     if (chatListMap[a].lastMessage.time < chatListMap[b].lastMessage.time) return 1
        // })

        return(
          <div style={{textAlign: 'left', overflowY: 'scroll', height: 625}}>
              {chatListKey.map(mesId =>
                {
                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => getMessages(mesId, multiChat)}
                      style={{backgroundColor: mesId == currentChat? '#cc3333': 'white'}}>
                        <div className="container-fluid">
                            <ChatContainer mesId={mesId}/>
                        </div>
                      </ul>
                  )
                }
              )}
          </div>
        )
    }
}

export default ChatList
