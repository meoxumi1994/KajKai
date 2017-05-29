import React from 'react'
import { Button,Row } from 'react-bootstrap'

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
          const { chatList, lazyLoad, getChat, createNewChat } = this.props

          return(
            <div>
              <h3>Recent Chat
                  <Button style={{marginLeft: 65, width: 50, height: 50}} onClick={() => this.props.createNewChat()}>
                      <img style={{width: 27, height: 27}} src="./images/newMessage.png"/>
                  </Button>
              </h3>
              {this.props.chatList.map(chat =>
                <Button style={{width:250, marginBottom: 10}} key={chat.id} onClick={() => this.props.getChat(chat)}>
                        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
                            <img src={chat.avatarUrl} width="38" height="38"/>
                        </div>
                        <div style={{ marginLeft: 40}}>
                            <div>{chat.name}</div>
                            <small className="text-muted" >Online</small>
                        </div>
                </Button>
              )}
            </div>
          )
    }

    componentDidMount(){
        this.props.getChatList()
    }
}

export default ChatList
