import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import iconUtility from '~/config/iconUtility'
import { timeSince } from '~/containers/support'
import { emoSrc } from '~/config/iconUtility'

const Message = ({message, time, user, styles, showAvatar}) => {

    if ( user == undefined ) {
        return (
            <div></div>
        )
    }

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
          <div style={{wordWrap: 'break-word'}}>
              <ul style={styles.text}>
                  {
                    showAvatar? <small className="text-muted" >{username}</small>: undefined
                  }
                  <ul style={type == 'notification'? undefined: styles.bounds}>
                      {
                          type == 'icon'?
                          <img src={emoSrc + text.substring(1, text.length-1) + ".svg"} style={{maxWidth: 80, maxHeight: 80}}/>
                          :
                          text.trim() != '' && type == 'message'? text: undefined
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
