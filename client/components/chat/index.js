import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeft from './left'

class Chat extends React.Component {

    constructor(props) {
      super(props)
    }

    // componentDidMount() {
    //     this.props.getChatList()
    // }

    render() {
      let { themes, messagesKey, messagesMap, multiChat, styles } = this.props

      return(
        <div style={mainStyles.mainDiv} className="input-group">
            <div style={Object.assign(mainStyles.left, themes.normal.bounds)}>
                <ChatLeft/>
            </div>
            <div style={mainStyles.spliter}>
            </div>
            <div style={Object.assign(mainStyles.right, themes.normal.bounds)}>
            <ChatCenterContainer
                  mesId={messagesKey[0]}
                  themes={themes}
                  messagesKey={messagesKey}
                  messagesMap={messagesMap}
                  multiChat={multiChat}
                  styles={styles}/>
            </div>
        </div>
      )
    }
}


export default Chat

const mainStyles = {
  mainDiv: {
    height: '100%',
    width: '100%',
  },
  left: {
    width: '25%',
    height: '100%',
    position: 'fixed',
    backgroundColor: 'white',
    left: 0,
  },
  spliter: {
    width: '0.05%',
    height: '100%',
    position: 'fixed',
    backgroundColor: 'grey',
    left: '25%'
  },
  right: {
    width: '60%',
    height: '100%',
    position: 'fixed',
    left: '25.05%',
  },
}
