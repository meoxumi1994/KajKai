import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeftContainer from '~/containers/chat/left'
import { Route, Redirect } from 'react-router'

class Chat extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      const { styles, center } = this.props
      const { messagesKey, messagesMap } = center

      return(
        <div>
            {
              messagesKey.map(
                  (mesId, index) => {
                        return (
                          <div key={mesId} style={{
                              position: 'fixed',
                              bottom: 0,
                              backgroundColor: 'white',
                              width: 320 ,
                              height: 400,
                              zIndex: 100,
                              marginLeft: index * 325 + 5
                          }}>
                              <ChatCenterContainer
                                  mesId={mesId}/>
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
