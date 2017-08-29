import React from 'react'
import ChatContainer from '~/containers/chat/left/ChatContainer'
import ReactDOM from 'react-dom'
import HeadContainer from '~/containers/chat/left/HeadContainer'

class ChatList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.setUserId(this.props.userId)
    }

    listenScrollEvent(event) {
        const { scrollHeight, scrollTop, clientHeight } = event.target
        if (scrollHeight < scrollTop + clientHeight + 1) {
            this.props.getChat(this.props.lazyLoad.offset)
        }
    }

    render(){
        const { chatListMap, chatListKey, currentChat, unread, lazyLoad, addon,
                createNewChat, getMessages, getChat, scrollTop
              } = this.props

        if (chatListKey.length == 0 && addon) {
            return (
                <HeadContainer/>
            )
        }

        if (lazyLoad.firstLoad) {
            return (
                <div id="loaderr" style={{height: 30}}></div>
            )
        }

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
          <div style={{cursor: 'pointer', textAlign: 'left', overflowY: 'scroll', marginTop: 5, height: addon? 255: 400, borderTop: '0.1px solid #dbdbdb', borderBottom: '0.1px solid #dbdbdb'}}
              onScroll={(event) => this.listenScrollEvent(event)}>
                {
                  chatListKey.map(mesId =>
                  {
                    return (
                        <ul className="nav nav-tabs" key={mesId} onClick={() => getMessages(mesId)}
                        style={{
                          backgroundColor: getTabColor(mesId, currentChat, unread),
                          borderTop: '0.1px solid #dbdbdb',
                          height: 60,
                          width: "100%",
                        }}>
                                <ChatContainer mesId={mesId} addon={addon}/>
                        </ul>
                    )
                  }
                )}
              {
                lazyLoad.loadMore? <div id="loaderr" style={{height: 30}}></div>: undefined
              }
          </div>
        )
    }
}

// <p style={{marginLeft: '43%', marginTop: 10, fontSize: 12}} onClick={() => getChat(lazyLoad.offset)}>
//       <a>Load more</a>
// </p>

const getTabColor = (mesId, currentChat, unread) => {
    // if (mesId == currentChat) {
    //     return '#cc3333'
    // } else

    if (unread.messages.indexOf(mesId) != -1) {
        return '#dbdcdd'
    } else {
        return 'white'
    }
}

export default ChatList
