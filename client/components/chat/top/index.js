import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import { Link } from 'react-router-dom'

class ChatTop extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {

      const {chatListMap, currentChat, mesId, styles, close, loadChat, isNewMessage} = this.props

      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">

        {
          isNewMessage?
            <label style={{backgroundColor: 'red', width: '100%'}}>
              <input placeholder="Nhập tên 1 người hoặc 1 nhóm..." className="form-control" style={{width: '100%', height: 71, marginTop: 0, fontSize: 15}}/>
            </label>
            :
            <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>
        }

          <div style={styles.iconGroupDiv}>
              <Link to="/chat">
                  <img style={styles.iconImg} src="/images/chatWindow.png" onClick={() => loadChat(mesId)}/>
              </Link>
              <SettingContainer styles={styles}/>
              <img style={styles.iconImg} src="/images/whiteAdd.png"/>
              <img style={styles.iconImg} src="/images/whiteClose.png" onClick={() => close(mesId)}/>
          </div>

          {
            isNewMessage? undefined: <hr style={styles.spliterHr}/>
          }

        </div>
      )
    }
}

export default ChatTop
