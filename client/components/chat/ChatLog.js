import React from 'react'
import { Popover } from 'react-bootstrap'
import Waiting from './Waiting'

const ChatLog = (props) => {
  const { id, username, chatLog, currentUser, avatarUrl } = props
  // console.log('chatLog ',chatLog);
  if (chatLog.length > 0)
      return (
        <div>
            {chatLog.reverse().map(chat =>
              id === JSON.parse(chat).id?
              <div key={JSON.parse(chat).time}>
                  <div className="btn btn-transparent btn-xs" style={{ float: 'right', marginRight: 140}}>
                      <img src={avatarUrl} width="33" height="33"/>
                  </div>
                  <div style={{ marginRight: 40, textAlign: 'right'}}>
                      <div>{JSON.parse(chat).message}</div>
                      <small className="text-muted" >{username}</small>
                  </div>
              </div>
              :
              <div key={JSON.parse(chat).time}>
                  <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
                      <img src={currentUser.avatarUrl} width="33" height="33"/>
                  </div>
                  <div style={{ marginLeft: 40}}>
                      <div>{JSON.parse(chat).message}</div>
                      <small className="text-muted" >{currentUser.name}</small>
                  </div>
              </div>
            )}
        </div>
      )
  else
      return <Waiting/>
}

export default ChatLog
