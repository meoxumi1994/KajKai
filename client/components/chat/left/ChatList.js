import React from 'react'
import { Button, Row } from 'react-bootstrap'

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
          const { chatListMap, chatListKey, user } = this.props
          const { createNewChat } = this.props
          return(
            <div>
              <h3>Recent Chat
                  <Button style={{marginLeft: 65, width: 50, height: 50}} onClick={() => createNewChat()}>
                      <img style={{width: 27, height: 27}} src="./images/newMessage.png"/>
                  </Button>
              </h3>
              <div>
                  {chatListKey.map(cKey =>
                    {
                      const { chatKey, userKey } = cKey
                      const { mesId, lastMessage, time, users } = chatListMap[chatKey]

                      return (
                        <Button style={{width:250, marginBottom: 10}} key={mesId}>
                            <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
                                {
                                  userKey.map(
                                      uKey => uKey === user.id ?
                                        <div key={uKey}></div>
                                        :
                                        <img src={users[uKey].avatarUrl} key={uKey} width="38" height="38"/>
                                  )
                                }
                            </div>
                            <div style={{ marginLeft: 40}}>
                                  {userKey.map(
                                    uKey => uKey === user.id ?
                                      <div key={uKey}></div>
                                      :
                                      <div key={uKey}>{users[uKey].name}</div>
                                  )}
                                  <small className="text-muted" >
                                    { users[lastMessage.id].name }
                                    : { lastMessage.message.text }
                                  </small>
                              </div>
                        </Button>
                      )
                    }
                  )}
              </div>
            </div>
          )
    }
}

export default ChatList
