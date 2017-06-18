import React from 'react'
import { Button, Row, FormGroup, InputGroup, FormControl } from 'react-bootstrap'
// import Avatar from 'react-avatar';

class ChatList extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const { chatListMap, chatListKey, user, currentChat, unreadChat } = this.props
        const { createNewChat, loadChat } = this.props
        return(
          <div style={{textAlign: 'left'}}>
              <div style={{width: 350, marginLeft: 25, marginTop: 25}}>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                        <img src='./images/search.png' width="20" height="20"/>
                    </InputGroup.Addon>
                    <FormControl type="text"placeholder="Search" />
                  </InputGroup>
                </FormGroup>
              </div>
              <hr style={{marginTop: 24}}/>
              {chatListKey.map(mesId =>
                {
                  const { lastMessage, time, usersKey, usersMap } = chatListMap[mesId]
                  const conversaters = []
                  let read = true

                  usersKey.map(uKey => uKey != user.id? conversaters.push(uKey): undefined)
                  let bgnColor

                  if (unreadChat.indexOf(mesId) != -1) {
                    read = false
                  }

                  if (mesId == currentChat) {
                    bgnColor = '#cccdd1'
                  } else {
                    bgnColor = '#e9ebee'
                  }

                  return (
                      <ul className="nav nav-tabs" key={mesId} onClick={() => loadChat(mesId)}
                      style={{ borderRadius:15, borderWidth: 1, borderColor: '#7f8082', width:400, height: 70, backgroundColor: bgnColor}}>
                          <div className="btn btn-transparent btn-xs" style={{ float: 'left', marginTop: 4, marginRight: 10, marginLeft: 20}}>
                              {
                                conversaters.length == 1?
                                <img src={usersMap[conversaters[0]].avatarUrl} key={conversaters[0]} width="35" height="35"/>
                                :
                                <img src={usersMap[conversaters[0]].avatarUrl} key={JSON.stringify(conversaters)} width="35" height="35"/>
                              }
                          </div>
                          <div style={{height: 70, marginTop: 8}}>
                                {
                                  conversaters.map(
                                  uKey =>
                                    read?
                                    <label key={uKey}>
                                      {conversaters.indexOf(uKey) == conversaters.length - 1? usersMap[uKey].name: usersMap[uKey].name + ', '}
                                    </label>
                                    :
                                    <label key={uKey}><i>
                                      {conversaters.indexOf(uKey) == conversaters.length - 1? usersMap[uKey].name: usersMap[uKey].name + ', '}
                                    </i></label>
                                )
                              }
                              {
                                read?
                                <p>
                                  <small className="text-muted" >
                                    {lastMessage.id == user.id ? 'You':usersMap[lastMessage.id].name}
                                    :
                                    {' '+ lastMessage.message.text}
                                  </small>
                                </p>
                                :
                                  <p>
                                  <img src='./images/unread.png' width="20" height="20"/>
                                  <i><b><u>
                                    <small className="text-muted" >
                                      {lastMessage.id == user.id ? 'You':usersMap[lastMessage.id].name}
                                      :
                                      {' '+ lastMessage.message.text}
                                    </small>
                                  </u></b></i></p>
                                }

                            </div>
                      </ul>
                  )
                }
              )}
          </div>
        )
    }
}

export default ChatList
