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
              mesId,
              chatListMap, currentChat, multipleKey,
              displayAddMember, displaySettings, close
            } = this.props

      const { usersKey, usersMap, display } = chatListMap[mesId]
      const { addMember } = display

      return (
        <div style={currentChat.mesId == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <DisplayLabelContainer mesId={mesId} styles={styles}/>
            <div style={styles.iconGroupDiv}>
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

const styles = {
    currentMainDiv: {
        backgroundColor: '#c90c0c',
        color: 'white',
        height: 30,
        width: 320
    },
    mainDiv: {
        backgroundColor: 'grey',
        color: 'white',
        height: 30,
        width: 320
    },
    iconImg: {
        width: 20,
        height: 20,
    },
    hiddenImg: {
        width: 20,
        height: 20,
    },
    button: {
        backgroundColor: '#c90c0c',
        width: 25,
        height: 25,
        paddingTop: 2,
        paddingLeft: 2
    },
    hiddenButton: {
        backgroundColor: '#c90c0c',
        width: 25,
        height: 25,
        paddingTop: 2,
        paddingLeft: 2
    },
    iconGroupDiv: {
        position: 'absolute',
        right: 10,
        top: 2
    },
    spliterHr: {
        display: 'none',
    },
    displayLabel: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    },
    addMemberDiv: {
        position: 'absolute',
        bottom: -40,
    }
}

export default ChatTop
