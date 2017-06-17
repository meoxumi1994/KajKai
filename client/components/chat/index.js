import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeft from './left'

const Chat = ({ user, chatListMap, messagesKey, messagesMap, mesId, currentChat, path, setCurrentChat }) => {
  return(
    <div style={styles.mainDiv} className="input-group">
        <div style={styles.left}>
            <ChatLeft/>
        </div>
        <div style={styles.right}>
            <ChatCenterContainer/>
        </div>
    </div>
  )
}

export default Chat

const styles = {
  mainDiv: {
    height: '100%',
    width: '100%'
  },
  left: {
    width: 400,
    height: 700,
    position: 'fixed',
    left: 0
  },
  right: {
    width: 900,
    height: 700,
    position: 'fixed',
    left: 405
  },
  top: {
    backgroundColor: 'blue',
    height: 50
  },
  topLeft: {
    backgroundColor: 'green',
    height: 50
  },
  center: {
    backgroundColor: 'grey',
    height: 600,
  },
  buttom: {

  }
}
