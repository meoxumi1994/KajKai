import React from 'react'
import { getTime } from '~/containers/support'

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getChatList()
    }

    render(){
        const { chatListMap, chatListKey, user, currentChat, unreadChat, themes } = this.props
        const { createNewChat, loadChat } = this.props
        return(
          <div style={{textAlign: 'left', overflowY: 'scroll', height: 625}}>
              {chatListKey.map(mesId =>
                {
                  const { lastMessage, time, usersKey, usersMap, displayLabel } = chatListMap[mesId]

                  const myThemes = mesId == currentChat? themes.highlighted: themes.normal
                  // let read = unreadChat.indexOf(mesId) != -1? false: true

                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => loadChat(mesId)}
                      style={styles.tab, {backgroundColor: getTabColor(mesId, currentChat, themes)}}>
                        <div className="container-fluid">
                          <div className="row">
                              <div className="col col-xs-2" style={styles.avatarDiv}>
                                  {
                                    usersKey.length == 1?
                                    <img src={usersMap[usersKey[0]].avatarUrl} key={usersKey[0]} style={styles.avatarImg}/>
                                    :
                                    <img src='./images/groupAvatar.png' key={JSON.stringify(usersKey)} style={styles.avatarImg}/>
                                  }
                              </div>

                              <div className="col col-xs-6" style={styles.messageDiv}>
                                    <div style={{color: myThemes.color}}><b>{displayLabel}</b></div>
                                    {
                                      <div style={{marginTop: 5}}>
                                        <small className="text-muted">
                                          <div style={{color: myThemes.color}}>
                                            {lastMessage.id == user.id ? 'You':usersMap[lastMessage.id].username}
                                            :
                                            {' '+ lastMessage.message.text.length > 40? lastMessage.message.text.substring(0, 40) + '...': lastMessage.message.text }
                                          </div>
                                        </small>
                                      </div>
                                    }
                              </div>

                              <div className="col col-xs-3" style={styles.timeDiv}>
                                  <small className="text-muted" style={{color: myThemes.color}}>
                                    {getTime(lastMessage.time)}
                                  </small>
                              </div>
                          </div>
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
