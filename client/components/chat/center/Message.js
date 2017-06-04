import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const Message = ({message, time, user, style}) => {

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
          {Date(time*1000)}
      </Popover>
    )

    if (message == undefined) {
      return (<div></div>)
    }
      return (
        <div key={time}>
            <div className="btn btn-transparent btn-xs" style={style.img}>
                <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                    <img src={user.avatarUrl} width="33" height="33"/>
                </OverlayTrigger>
            </div>
            <div style={style.text}>
                {(message.indexOf('.jpg') == -1 && message.indexOf('.png') == -1) ?
                    <div>
                        <div>{message}</div>
                        <small className="text-muted" >{user.username}</small>
                    </div>
                  :
                    <a href={message}>
                      <img src={message} width="300" height="300"/>
                    </a>
                }
            </div>
        </div>
      )
}

export default Message
