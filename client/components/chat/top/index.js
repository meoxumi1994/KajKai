import React from 'react'
import SettingContainer from '~/containers/chat/top/SettingContainer'
import NewChatContainer from '~/containers/chat/top/NewChatContainer'
import AddMemberContainer from '~/containers/chat/top/AddMemberContainer'
import { Link } from 'react-router-dom'

class ChatTop extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      // console.log('render top');
      let conversator
      const {chatListMap, currentChat, mesId, styles, close, loadChat, isNewMessage, visibility, addMemberVisibility} = this.props

      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">

          <NewChatContainer/>

         <div style={styles.iconGroupDiv}>
             <Link to="/chat">
                 <img style={styles.iconImg} src="/images/chatWindow.png" onClick={() => loadChat(mesId)}/>
             </Link>
             <SettingContainer styles={styles}/>
             <img style={styles.iconImg} src="/images/whiteAdd.png" onClick={() => addMemberVisibility()}/>
             <img style={styles.iconImg} src="/images/whiteClose.png" onClick={() => close(mesId)}/>
         </div>

          { isNewMessage? undefined: <hr style={styles.spliterHr}/> }

        </div>
      )
    }
}

// <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>

export default ChatTop
