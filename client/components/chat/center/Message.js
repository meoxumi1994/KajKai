import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import iconUtility from '~/config/iconUtility'
import { timeSince } from '~/containers/support'

const Message = ({message, time, user, styles, showAvatar}) => {

    const showTimePopup = (
      <Popover id="popover-trigger-hover-focus">
          {timeSince(time)}
      </Popover>
    )

    const picturePopup = (
      <Popover id="image-popup">
          Download
      </Popover>
    )

    const { avatarUrl, username } = user
    const { text, url, type } = message

    return (
      <div key={time}>
          <div className="btn btn-transparent btn-xs" style={styles.imgDiv}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={showTimePopup}>
                  <img src={avatarUrl} style={showAvatar?styles.imgIcon:{display: 'none'}}/>
              </OverlayTrigger>
          </div>
          <div>
              <ul style={styles.text}>
                  {
                    showAvatar? <small className="text-muted" >{username}</small>: undefined
                  }
                  <ul style={styles.bounds}>
                      {
                          type == 'icon'?
                          <img src={"./images/chatIcons/Baby/"+text.substring(1, text.length-1)+".png"} style={{maxWidth: 80, maxHeight: 80}}/>
                          :
                          text.trim() == ''? undefined: text
                      }
                      {}
                      <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={picturePopup}>
                          <a href={url}>{url.trim() == ''? undefined: <img src={url} style={{maxWidth: 180, maxHeight: 180}}/>}</a>
                      </OverlayTrigger>
                  </ul>
              </ul>
          </div>
      </div>
    )
}

export default Message
