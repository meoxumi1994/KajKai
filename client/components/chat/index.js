import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatListContainer from '~/containers/chat/ChatListContainer'
import SendMessageContainer from '~/containers/chat/SendMessageContainer'
import MessageListContainer from '~/containers/chat/MessageListContainer'
import NewChatContainer from '~/containers/chat/NewChatContainer'

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
