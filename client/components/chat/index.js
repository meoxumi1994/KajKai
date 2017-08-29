import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeftContainer from '~/containers/chat/left'
import { Route, Redirect } from 'react-router'
import { Popover, Overlay } from 'react-bootstrap'
import StoreContainer from '~/containers/chat/top/StoreContainer'

class Chat extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      const { styles, center, auth, getChatList } = this.props
      const { messagesKey, messagesMap } = center

      if (auth == 'WHO_SUCCESS') {
          getChatList()
      }

      return(
        <div>
            {
              messagesKey.map(
                  (mesId, index) => {
                        return (
                          <div key={mesId}>
                              <StoreContainer index={index} mesId={mesId}/>
                              <div style={{
                                  position: 'fixed',
                                  bottom: 0,
                                  backgroundColor: 'white',
                                  width: 280 ,
                                  height: 380,
                                  zIndex: 100,
                                  marginLeft: index * 285 + 5,
                                  border: '0.1px solid #cccccc'
                              }}>
                                  <ChatCenterContainer
                                      mesId={mesId}/>
                              </div>
                        </div>
                      )
                  }
            )
          }
        </div>
      )
    }
}

export default Chat
