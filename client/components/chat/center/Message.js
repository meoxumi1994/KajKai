import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import iconUtility from '~/config/iconUtility'

const Message = ({message, time, user, style}) => {

    var regex = /\((.*?)\)/g
    var match
    var newMessage = message

      match = regex.exec(message);
      if (match && iconUtility.getIcon(match[1]) != null) {
          newMessage = message.split('('+match[1]+')').join('<img src="'+iconUtility.getIcon(match[1]).src+'" width="40" height="40"/>')
      }

    if (newMessage == undefined) {
      return (<div></div>)
    }

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
          {Date(time*1000)}
      </Popover>
    )

    return (
      <div key={time}>
          <div className="btn btn-transparent btn-xs" style={style.img}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                  <img src={user.avatarUrl} width="33" height="33"/>
              </OverlayTrigger>
          </div>
          <div style={style.text}>
              {(newMessage.indexOf('http') == -1) ?
                  <div>
                      <div dangerouslySetInnerHTML={{__html: newMessage}} />
                      <small style={{color: 'grey'}} className="text-muted" ><i><u>({user.username})</u></i></small>
                  </div>
              :
                  <a href={newMessage}>
                      <img src={newMessage} width="300" height="300"/>
                  </a>
                }
          </div>
      </div>
    )
}

export default Message
