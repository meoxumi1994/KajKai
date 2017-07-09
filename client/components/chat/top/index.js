import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import NewChatContainer from '~/containers/chat/top/NewChatContainer'
import AddMemberContainer from '~/containers/chat/top/AddMemberContainer'
import { Link } from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input'

class ChatTop extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      let conversator
      const { chatListMap, currentChat, mesId, styles} = this.props
      const { displayAddMember } = this.props
      // const displayAdd = chatListMap[mesId].display.addMember
      // console.log('displayAdd ', displayAdd);
      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>
            <div style={styles.iconGroupDiv}>
                <img style={styles.iconImg} src="/images/plus.ico" onClick={() => displayAddMember(mesId)}/>
                <img style={styles.iconImg} src="/images/newSetting.png" onClick={() => close(mesId)}/>
            </div>
            <AddMemberContainer mesId={mesId}/>

        </div>
      )
    }
}

// {
//     displayAdd? <AddMemberContainer mesId={mesId}/>: undefined
// }
// {
//     displayAdd? <hr style={styles.spliterHr, {display: 'none'}}/>: <hr style={styles.spliterHr}/>
// }


// <Link to="/chat">
//     <img style={styles.iconImg} src="/images/chatWindow.png" onClick={() => loadChat(mesId)}/>
// </Link>

//


// <div style={styles.iconGroupDiv}>
//    <SettingContainer styles={styles}/>
//    <img style={styles.iconImg} src="/images/whiteAdd.png"/>
// </div>
// <AddMemberContainer/>

//---------

//

export default ChatTop
