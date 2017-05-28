import React from 'react'
import { Button,Row } from 'react-bootstrap'

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
          return(
            <div>
              <h3>Recent Chat</h3>
              {this.props.chatList.map(chat =>
                <Row key={chat.id} onClick={() => this.props.onChat(chat)}>
                    <div className="list-group-item" style={{ paddingTop:8, paddingBottom: 6, paddingLeft: 6,paddingRight: 6, width:250, height:70 }}>
                        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
                            <img src={chat.avatarUrl} width="38" height="38"/>
                        </div>
                        <div style={{ marginLeft: 40}}>
                            <div>{chat.name}</div>
                            <small className="text-muted" >Online</small>
                        </div>
                    </div>
                </Row>
              )}
            </div>
          )
    }

    componentDidMount(){
        this.props.getChatList()
    }
}

export default ChatList
