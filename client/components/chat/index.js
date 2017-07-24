import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeftContainer from '~/containers/chat/left'
import { Route, Redirect } from 'react-router'

// import TagsInput from 'react-tagsinput'

class Chat extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      let { messagesKey, messagesMap, styles } = this.props
      return(
        <div style={mainStyles.mainDiv} className="input-group">
            <div style={mainStyles.left}>
                <ChatLeftContainer multiChat={false}/>
            </div>
            <div style={mainStyles.spliter}>
            </div>
            <div style={mainStyles.right}>
                <ChatCenterContainer
                    mesId={messagesKey[0]}
                    messagesMap={messagesMap}
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
