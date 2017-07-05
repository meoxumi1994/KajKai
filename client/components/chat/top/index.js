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
      const { close, loadChat } = this.props

      console.log('mesId ', mesId);
      return (
        <div style={currentChat == mesId? styles.currentMainDiv: styles.mainDiv} className="input-group">
            <label style={styles.displayLabel}>{chatListMap[mesId].displayLabel}</label>
            <AddMemberContainer/>
        </div>
      )
    }
}

// <hr style={styles.spliterHr}/>
// <div style={styles.iconGroupDiv}>
//    <SettingContainer styles={styles}/>
//    <img style={styles.iconImg} src="/images/whiteAdd.png"/>
// </div>
// <AddMemberContainer/>

// <div>
//     <ReactTags tags={tags}
//           handleDelete={handleDelete}
//           handleAddition={handleAddition}
//           placeholder="Nhập tên một người..."
//      />
// </div>

//---------
// <Link to="/chat">
//     <img style={styles.iconImg} src="/images/chatWindow.png" onClick={() => loadChat(mesId)}/>
// </Link>
// <img style={styles.iconImg} src="/images/whiteClose.png" onClick={() => close(mesId)}/>
//

export default ChatTop
