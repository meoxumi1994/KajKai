import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import RecentUserListContainer from '~/containers/chat/RecentUserListContainer'
import SendMessageContainer from '~/containers/chat/SendMessageContainer'
import ChatLogContainer from '~/containers/chat/ChatLogContainer'

const Chat = () => {
  return(
    <div style={{paddingTop:10}}>
      <Grid>
           <Col lg={3} lgPull={1}>
              <RecentUserListContainer/>
           </Col>
           <Col lg={14} lgOffset={3}>
              <Row><ChatLogContainer/></Row>
              <Row><SendMessageContainer/></Row>
           </Col>
     </Grid>
    </div>
  )
}

export default Chat
