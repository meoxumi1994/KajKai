import React from 'react'

const Message = ({message, time, user, style}) => {
    if (message.indexOf('.jpg') == -1) {
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
    } else {
      return (
        <div key={time}>
            <div className="btn btn-transparent btn-xs" style={style.img}>
                <img src={user.avatarUrl} width="33" height="33"/>
            </div>
            <div style={style.text}>
                <a href={message}>
                  <img src={message} width="300" height="300"/>
                </a>
            </div>
        </div>
      )
    }

}

export default Message
