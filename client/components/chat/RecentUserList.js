import React from 'react'
import { Button,Row } from 'react-bootstrap'
import Waiting from './Waiting'

class RecentUserList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
          return(
            <div>
              <h2>Recent Chat</h2>
              {this.props.chatList.map(chat =>
                <Row key={chat.id} onClick={() => this.props.onChat(chat)}>
                    <div className="list-group-item" style={{ paddingTop:3, paddingBottom: 3, paddingLeft: 0,paddingRight: 0 }}>
                        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
                            <img src={chat.avatarUrl} width="33" height="33"/>
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
        this.props.loadchat()
    }
}

export default RecentUserList
