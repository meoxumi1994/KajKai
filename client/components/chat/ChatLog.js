import React from 'react'

const ChatLog = ({message, time, user, style}) => {
  return (
    <div key={time}>
        <div className="btn btn-transparent btn-xs" style={style.img}>
            <img src={user.avatarUrl} width="33" height="33"/>
        </div>
        <div style={style.text}>
            <div>{message}</div>
            <small className="text-muted" >{user.username}</small>
        </div>
    </div>
  )
}

export default ChatLog
