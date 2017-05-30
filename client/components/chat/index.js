import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatListContainer from '~/containers/chat/left/ChatListContainer'
import SendMessageContainer from '~/containers/chat/bottom/SendMessageContainer'
import MessageListContainer from '~/containers/chat/center/MessageListContainer'
import NewChatContainer from '~/containers/chat/top/NewChatContainer'

const Chat = () => {
  return(
    <div style={{paddingTop:10}}>
      <Grid>
           <Col lg={3} lgPull={1}>
              <Row style={{float: 'left'}}><ChatListContainer/></Row>
           </Col>
           <Col lg={14} lgOffset={3}>
              <NewChatContainer/>
              <MessageListContainer/>
              <SendMessageContainer/>
           </Col>
     </Grid>
    </div>
  )
}

export default Chat
