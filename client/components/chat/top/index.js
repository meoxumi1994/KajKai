import React from 'react'
import SettingsContainer from '~/containers/chat/top/SettingsContainer'
import AddMemberContainer from '~/containers/chat/top/AddMemberContainer'
import { Link } from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input'
import Settings from './Settings'

class ChatTop extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      let conversator
      const { chatListMap, currentChat, mesId, styles, multipleKey } = this.props
      const { displayAddMember, loadChat, displaySettings, close } = this.props

      const { usersKey, usersMap, displayLabel } = chatListMap[mesId]

      const { addMember } = chatListMap[mesId].display

      let label = displayLabel
      if (label == undefined || label == '') {
          if (usersKey.length == 0) {
              label = 'Tin nhắn mới'
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

      return (
        <div style={currentChat.mesId == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <label style={styles.displayLabel}>{label}</label>

            <div style={styles.iconGroupDiv}>
                <button className="btn" style={styles.hiddenButton}>
                    <Link to={"/chat"} >
                        <img style={styles.hiddenImg} src="./images/blackChat.png"/>
                    </Link>
                </button>
                <button className="btn" style={styles.button} onClick={() => displayAddMember(mesId)}>
                    <img style={styles.iconImg} src="/images/plus.ico"/>
                </button>
                <button className="btn" style={styles.button} onClick={() => displaySettings(mesId)}>
                    <img style={styles.iconImg} src="/images/newSetting.png"/>
                </button>
                <button className="btn" style={styles.button} onClick={() => close(mesId, multipleKey)}>
                    <img style={styles.hiddenImg} src="/images/blackClose.png"/>
                </button>
            </div>
            {
                addMember? <AddMemberContainer styles={styles} mesId={mesId}/>: <hr style={styles.spliterHr}/>
            }
            <SettingsContainer mesId={mesId}/>
        </div>
      )
    }
}

export default ChatTop
