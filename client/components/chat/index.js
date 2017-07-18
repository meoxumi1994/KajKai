import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import ChatCenterContainer from '~/containers/chat/center'
import ChatLeftContainer from '~/containers/chat/left'
import { Route, Redirect } from 'react-router'

// import TagsInput from 'react-tagsinput'

class Chat extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {tags: []}
    }

    componentDidMount(){
        // this.props.getChatList()
    }

    // handleChange(tags) {
    //     this.setState({tags})
    // }
    //
    // render() {
    //     return <TagsInput
    //               value={this.state.tags}
    //               onChange={(tags) => this.handleChange(tags)}
    //               inputValue={this.state.tag}
    //               inputProps={{
    //                   placeholder: 'Add a fucking tag'
    //               }}
    //               tagProps={{
    //                   className: 'btn btn-default',
    //                   classNameRemove: 'glyphicon glyphicon-remove white'
    //               }}
    //               preventSubmit={true}
    //             />
    // }

    render() {
      let { messagesKey, messagesMap, styles, multiChat } = this.props
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
