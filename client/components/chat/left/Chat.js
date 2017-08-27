import React from 'react'
import { timeSince } from '~/containers/support'

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { mesId,
                chatListMap, user, currentChat, addon,
                removeNewChat
              } = this.props

        if (chatListMap[mesId] == undefined || user.id == undefined) {
            return (
                <div></div>
            )
        }

        const { usersKey, usersMap, lastMessage, time, displayLabel, store } = chatListMap[mesId]

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

        // let textColor = mesId == currentChat? 'white': 'black'
        let textColor = 'black'
        return (
          <div className="row">
              <div className="col col-xs-2" style={styles.avatarDiv}>
                  {
                    lastMessage == undefined?
                    <img src='/images/avatardefault.png' style={styles.avatarImg}/>
                    :
                    usersKey.length == 1?
                    <img src={usersMap[usersKey[0]].avatarUrl} key={usersKey[0]} style={styles.avatarImg}/>
                    :
                    <img src='/images/groupAvatar.png' key={JSON.stringify(usersKey)} style={styles.avatarImg}/>
                  }
              </div>

              <div className="col col-xs-5" style={ addon? styles.messageDivAddon: styles.messageDiv}>
                    <div style={{color: textColor, fontSize: 13}}><b>{label.length > 23? label.substring(0, 23) + '...': label}</b></div>
                    {
                      store != undefined && store.ownerId == user.id?
                      <div style={{color: textColor, fontSize: 11}}>
                      <img src={store.avatarUrl} style={{width: 20, height: 20, marginRight: 5}}/>
                      {store.storeName}
                      </div>
                      :
                      <div></div>
                    }
                    {
                      lastMessage != undefined?
                      <div>
                        <small className="text-muted">
                          <div style={{color: textColor}}>
                            { lastMessage.id != myUser.id ? lastMessage.message.url != ''?
                            usersMap[lastMessage.id].username +" sent you a picture" : usersMap[lastMessage.id].username + ': '
                            : 'You: '}
                            { lastMessage.message.text.length > 25? lastMessage.message.text.substring(0, 25) + '...': lastMessage.message.text }
                          </div>
                        </small>
                      </div>
                      :
                      undefined
                    }
              </div>

              {
                addon? undefined :
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
        marginTop: 4,
        marginLeft: 10,
        width: '18%',
    },
    avatarImg: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    messageDiv: {
        height: 70,
        marginTop: 4,
        width: '50%',
        height: 55,
    },
    messageDivAddon: {
        height: 70,
        marginTop: 4,
        width: '75%',
        height: 55,
        marginLeft: 5
    },
    timeDiv: {
        marginTop: 4,
        height: 55,
        width: '25%',
    },
}

export default Chat
