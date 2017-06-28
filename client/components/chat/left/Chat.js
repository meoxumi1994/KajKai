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
        )
    }
}

export default Chat
