import React from 'react'
import SettingsContainer from '~/containers/chat/top/SettingsContainer'
import AddMemberContainer from '~/containers/chat/top/AddMemberContainer'
import DisplayLabelContainer from '~/containers/chat/top/DisplayLabelContainer'
import { Link } from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input'
import Settings from './Settings'

class ChatTop extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      let conversator
      const {
              mesId, styles,
              chatListMap, currentChat, multipleKey,
              displayAddMember, displaySettings, close
            } = this.props

      const { usersKey, usersMap, display } = chatListMap[mesId]

      const { addMember } = chatListMap[mesId].display

      return (
        <div style={currentChat.mesId == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <DisplayLabelContainer mesId={mesId} styles={styles}/>
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
