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
      const { chatListMap, chatListKey, currentChat, mesId, styles } = this.props
      const { displayAddMember, loadChat, displaySettings, close } = this.props

      const { usersKey, usersMap } = chatListMap[mesId]

      const displayAdd = chatListMap[mesId].display.addMember

      console.log('chatListKey', chatListKey);

      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <label style={styles.displayLabel}>{usersKey.length == 0?'Tin nhắn mới':usersKey.map(uKey => usersMap[uKey].username + ', ')}</label>
            <div style={styles.iconGroupDiv}>
                <img style={styles.iconImg} src="/images/plus.ico" onClick={() => displayAddMember(mesId)}/>
                <img style={styles.iconImg} src="/images/newSetting.png" onClick={() => displaySettings()}/>
                <img style={styles.closeImg} src="/images/close.svg" onClick={() => close(mesId, chatListKey)}/>
            </div>
            {
                displayAdd? <AddMemberContainer styles={styles} mesId={mesId}/>: <hr style={styles.spliterHr}/>
            }
            <SettingsContainer mesId={mesId}/>
        </div>
      )
    }
}

//


export default ChatTop
