import React from 'react'
import { getTime } from '~/containers/support'

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { chatListMap, mesId, user, currentChat } = this.props

        if (chatListMap[mesId] == undefined) {
          return (
            <div></div>
          )
        }

        const { lastMessage, time, usersKey, usersMap, displayLabel, status } = chatListMap[mesId]

        let textColor = mesId == currentChat? 'white': 'black'
        return (
          <div className="row">
              <div className="col col-xs-2" style={styles.avatarDiv}>
                  {
                    lastMessage == undefined?
                    <img src='./images/avatardefault.png' style={styles.avatarImg}/>
                    :
                    usersKey.length == 1?
                    <img src={usersMap[usersKey[0]].avatarUrl} key={usersKey[0]} style={styles.avatarImg}/>
                    :
                    <img src='./images/groupAvatar.png' key={JSON.stringify(usersKey)} style={styles.avatarImg}/>
                  }
              </div>

              <div className="col col-xs-5" style={styles.messageDiv}>
                    <div style={{color: textColor}}><b>{displayLabel}</b></div>
                    {
                      lastMessage == undefined? undefined:
                      <div style={{marginTop: 5}}>
                        <small className="text-muted">
                          <div style={{color: textColor}}>
                            {lastMessage.id == user.id ? 'Bạn':usersMap[lastMessage.id].username}
                            :
                            {'  '+ lastMessage.message.text.length > 40? lastMessage.message.text.substring(0, 40) + '...': lastMessage.message.text }
                          </div>
                        </small>
                      </div>
                    }
              </div>

              {
                lastMessage == undefined? undefined:
                <div className="col col-xs-4" style={styles.timeDiv}>
                    <small className="text-muted" style={{color: textColor}}>
                      {lastMessage.time}
                    </small>
                </div>
              }
          </div>
        )
    }
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
}

export default Chat
