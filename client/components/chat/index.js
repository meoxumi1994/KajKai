import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeft from './left'

class Chat extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // console.log('did fucking mount');
    }

    render() {
      let { themes } = this.props

      return(
        <div style={styles.mainDiv} className="input-group">
            <div style={Object.assign(styles.left, themes.normal.bounds)}>
                <ChatLeft/>
            </div>
            <div style={styles.spliter}>
            </div>
            <div style={Object.assign(styles.right, themes.normal.bounds)}>
                <ChatCenterContainer/>
            </div>
        </div>
      )
    }
}

export default Chat

const styles = {
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
