import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import { Link } from 'react-router-dom'

const ChatTop = ({chatListMap, currentChat, mesId, styles, close, setMultiChat}) => {

  return (
    <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">

      <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>

      <div style={styles.iconGroupDiv}>
          <Link to="/chat">
              <img style={styles.iconImg} src="/images/chatWindow.png"/>
          </Link>
          <SettingContainer styles={styles}/>
          <img style={styles.iconImg} src="/images/whiteAdd.png"/>
          <img style={styles.iconImg} src="/images/whiteClose.png" onClick={() => close(mesId)}/>
      </div>

      <hr style={styles.spliterHr}/>
    </div>
  )
}

export default ChatTop
