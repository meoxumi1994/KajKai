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
              chatListMap, currentChat,
              displayAddMember, displaySettings, close
            } = this.props

      const { usersKey, usersMap, display, store } = chatListMap[mesId]
      const { addMember } = display

      const headColor = currentChat.mesId == mesId? styles.highlightedButton:  styles.button

      return (
        <div style={currentChat.mesId == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">            
            <DisplayLabelContainer mesId={mesId} styles={styles}/>
            <div style={styles.iconGroupDiv}>
                {
                    store != undefined? undefined:
                    <button className="btn" style={headColor} onClick={() => displayAddMember(mesId)}>
                        <img style={{height: 15, width: 15, marginLeft: 3}} src="/images/chat/add.png"/>
                    </button>
                }
                {
                    store != undefined? undefined:
                    <button disabled={mesId == 0? true: false} className="btn" style={headColor} onClick={() => displaySettings(mesId)}>
                        <img style={{height: 18, width: 18, marginLeft: 2}} src="/images/chat/setting.png"/>
                    </button>
                }
                <button className="btn" style={headColor} onClick={() => close(mesId)}>
                    <img style={{height: 15, width: 15, marginLeft: 2}} src="/images/chat/close.png"/>
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
        backgroundColor: '#911108',
        color: 'white',
        height: 30,
        width: 280
    },
    mainDiv: {
        backgroundColor: '#808080',
        color: 'white',
        height: 30,
        width: 280
    },
    button: {
        backgroundColor: '#808080',
        width: 25,
        height: 25,
        paddingTop: 2,
        paddingLeft: 2,
        marginLeft: 2
    },
    highlightedButton: {
        backgroundColor: '#911108',
        // backgroundColor: 'grey',
        width: 25,
        height: 25,
        paddingTop: 1,
        paddingLeft: 1,
        marginLeft: 2
    },
    iconGroupDiv: {
        position: 'absolute',
        right: 3,
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
