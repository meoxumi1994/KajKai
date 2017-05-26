import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import RecentUserListContainer from '~/containers/chat/RecentUserListContainer'
import SendMessageContainer from '~/containers/chat/SendMessageContainer'
import ChatLogsContainer from '~/containers/chat/ChatLogsContainer'

const Chat = () => {
  return(
    <div style={{paddingTop:10}}>
      <Grid>
           <Col lg={3} lgPull={1}>
              <RecentUserListContainer/>
           </Col>
           <Col lg={14} lgOffset={3}>
              <Row><ChatLogsContainer/></Row>
              <Row><SendMessageContainer/></Row>
           </Col>
     </Grid>
    </div>
  )
}

export default Chat
