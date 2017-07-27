import React from 'react'
import { timeSince } from '~/containers/support'

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { mesId,
                chatListMap, user, currentChat,
                removeNewChat
              } = this.props

        if (chatListMap[mesId] == undefined || user.id == undefined) {
            return (
                <div></div>
            )
        }

        const { usersKey, usersMap, lastMessage, time, displayLabel } = chatListMap[mesId]

        let label = displayLabel
        if (label == undefined || label == '') {
            if (usersKey.length == 0) {
                label = 'New message'
            } else {
                label = ''
                for (let i in usersKey) {
                    if (!usersMap[usersKey[i]].disabled) {
                        label += usersMap[usersKey[i]].username + ', '
                    }
                }
                label = label.substring(0, label.length - 2)
            }
        }

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
                    <div style={{color: textColor}}><b>{label.length > 23? label.substring(0, 23) + '...': label}</b></div>
                    {
                      lastMessage != undefined?
                      <div style={{marginTop: 5}}>
                        <small className="text-muted">
                          <div style={{color: textColor}}>
                            {lastMessage.id != user.id ? usersMap[lastMessage.id].username + ': ' : 'You: '}
                            { lastMessage.message.text.length > 65? lastMessage.message.text.substring(0, 65) + '...': lastMessage.message.text }
                          </div>
                        </small>
                      </div>
                      :
                      undefined
                    }
              </div>

              {
                lastMessage == undefined? undefined:
                <div className="col col-xs-4" style={styles.timeDiv}>
                    <small className="text-muted" style={{color: textColor}}>
                      {timeSince(lastMessage.time)}
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
}

export default Chat
