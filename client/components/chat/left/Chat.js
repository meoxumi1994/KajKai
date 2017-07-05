import React from 'react'
import { getTime } from '~/containers/support'

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { usersKey, usersMap, displayLabel, lastMessage, styles, myThemes, user } = this.props

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
                    <div style={{color: myThemes.color}}><b>{displayLabel}</b></div>
                    {
                      lastMessage == undefined? undefined:
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

              {
                lastMessage == undefined? undefined:
                <div className="col col-xs-4" style={styles.timeDiv}>
                    <small className="text-muted" style={{color: myThemes.color}}>
                      {lastMessage.time}
                    </small>
                </div>
              }
          </div>
        )
    }
}

export default Chat
