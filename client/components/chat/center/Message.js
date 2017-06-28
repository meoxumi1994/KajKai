import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import iconUtility from '~/config/iconUtility'
import { getTime } from '~/containers/support'

const Message = ({message, time, user, styles, showAvatar}) => {

    const showTimePopup = (
      <Popover id="popover-trigger-hover-focus">
          {getTime(time)}
      </Popover>
    )

    const picturePopup = (
      <Popover id="image-popup">
          Download
      </Popover>
    )

    return (
      <div key={time}>
          <div className="btn btn-transparent btn-xs" style={styles.imgDiv}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={showTimePopup}>
                  <img src={user.avatarUrl} style={showAvatar?styles.imgIcon:{display: 'none'}}/>
              </OverlayTrigger>
          </div>
          <div>
              <ul style={styles.text}>
                  <small style={showAvatar?styles.senderDiv:{display: 'none'}} className="text-muted" >{user.username}</small>
                  <ul style={styles.bounds}>
                      {message.text}
                  </ul>
              </ul>
          </div>
      </div>
    )
}

  // <div style={styles.bounds} dangerouslySetInnerHTML={{__html: message.text}}/>

export default Message
