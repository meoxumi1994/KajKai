import React from 'react'
import ChatContainer from '~/containers/chat/left/ChatContainer'

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const { chatListMap, chatListKey, currentChat, unreadChat, themes } = this.props
        const { createNewChat, loadChat } = this.props
        return(
          <div style={{textAlign: 'left', overflowY: 'scroll', height: 625}}>
              {chatListKey.map(mesId =>
                {
                  const { lastMessage, time, usersKey, usersMap, displayLabel } = chatListMap[mesId]

                  const myThemes = mesId == currentChat? themes.highlighted: themes.normal
                  // let read = unreadChat.indexOf(mesId) != -1? false: true

                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => loadChat(mesId, location.pathname == '/chat'? false: true)}
                      style={styles.tab, {backgroundColor: getTabColor(mesId, currentChat, themes)}}>
                        <div className="container-fluid">
                            <ChatContainer
                                usersKey={usersKey}
                                usersMap={usersMap}
                                displayLabel={displayLabel}
                                lastMessage={lastMessage}
                                styles={styles}
                                myThemes={myThemes}
                                />
                        </div>
                      </ul>
                  )
                }
              )}
          </div>
        )
    }
}

const getTabColor = (mesId, currentChat, themes) => {
    if (mesId == currentChat) {
      return themes.highlighted.backgroundColor
    }
    return themes.normal.backgroundColor
}

const styles = {
  avatarDiv: {
    float: 'left',
    marginTop: 9,
    marginRight: 10,
    marginLeft: 10,
    width: '18%',
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  messageDiv: {
    height: 70,
    marginTop: 15,
    width: '50%',
  },
  timeDiv: {
    marginTop: 15,
    width: '25%',
  },
  read: {
    name: {
      fontWeight: 'normal'
    },
    msg: {

    },
    time: {
      color: 'black'
    }
  },
  unread: {
    name: {
      fontWeight: 'bold'
    },
    msg: {
      fontWeight: 'bold'
    },
    time: {
      color: 'red'
    }
  },

  tab: {
    borderWidth: 1,
    borderColor: 'grey',
    width:400,
    height: 70,
  },
}

export default ChatList
