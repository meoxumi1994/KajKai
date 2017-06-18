import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import { Link } from 'react-router-dom'
// import Avatar from 'react-avatar'

const ChatTop = ({usersMap, usersKey, styles, user, close, mesId, setMultiChat, currentChat}) => {
  const conversaters = []
  usersKey.map(uKey => uKey != user.id? conversaters.push(uKey): undefined)

  return (
    <div style={currentChat == mesId? styles.chatHeader: styles.chatHeaderGrey} className="input-group">
      {
        conversaters.map(uKey =>
          <img src={usersMap[uKey].avatarUrl} key={uKey} width="35" height="35"/>
        )
      }
      {
        conversaters.map(
        uKey =>
          <label style={{marginLeft: 10}}>
            {conversaters.indexOf(uKey) == conversaters.length - 1? usersMap[uKey].name: usersMap[uKey].name + ', '}
          </label>
      )}

      <img style={styles.closeButton} src="./images/whiteClose.png" onClick={() => close(mesId)}/>
      <SettingContainer styles={styles}/>
      <img style={styles.headerIcon} src="./images/whiteAdd.png"/>
      <Link to="/chat">
          <img style={styles.headerIcon} src="./images/chatWindow.png"/>
      </Link>
      <hr style={styles.topHr}/>
    </div>
  )
}

export default ChatTop
