import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import iconUtility from '~/config/iconUtility'

const Message = ({message, time, user, style}) => {
    // var regex = /\((.*?)\)/g
    // var match = regex.exec(message);
    //
    // if (match && iconUtility.getIcon(match[1]) != null) {
    //     message = message.split('('+match[1]+')').join('<img src="'+iconUtility.getIcon(match[1]).src+'" width="40" height="40"/>')
    // }
    //
    // if (message == undefined) {
    //   return (<div></div>)
    // }

    const showTimePopup = (
      <Popover id="popover-trigger-hover-focus">
          {Date(time*1000)}
      </Popover>
    )

    const picturePopup = (
      <Popover id="image-popup">
          Download
      </Popover>
    )

    return (
      <div key={time}>
          <div className="btn btn-transparent btn-xs" style={style.img}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={showTimePopup}>
                  <img src={user.avatarUrl} width="33" height="33"/>
              </OverlayTrigger>
          </div>
          <div style={style.text}>
              <div>
                  <div dangerouslySetInnerHTML={{__html: message.text}} />
                  <small style={{color: 'grey'}} className="text-muted" ><i><u>({user.name})</u></i></small>
              </div>
          </div>
      </div>
    )
}

export default Message
