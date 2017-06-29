import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import { Link } from 'react-router-dom'

class ChatTop extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {

      const {chatListMap, currentChat, mesId, styles, close, loadChat} = this.props

      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">

          <input className="form-control" style={styles.displayLabel}/>

          <div style={styles.iconGroupDiv}>
              <Link to="/chat">
                  <img style={styles.iconImg} src="/images/chatWindow.png" onClick={() => loadChat(mesId)}/>
              </Link>
              <SettingContainer styles={styles}/>
              <img style={styles.iconImg} src="/images/whiteAdd.png"/>
              <img style={styles.iconImg} src="/images/whiteClose.png" onClick={() => close(mesId)}/>
          </div>

          <hr style={styles.spliterHr}/>
        </div>
      )
    }
}
// <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>

export default ChatTop
