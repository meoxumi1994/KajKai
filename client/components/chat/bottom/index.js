import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button , OverlayTrigger, Popover, Nav, NavItem } from 'react-bootstrap'
import ModalUploadImageContainer from '~/containers/chat/bottom/ModalUploadImageContainer'
import EmoNavContainer from '~/containers/chat/bottom/EmoNavContainer'

const ChatBottom = ({mesId, userId, visibility, sendMessage, uploadImage, styles}) => {
  let msg
  return (
    <div style={{display: visibility}}>

        <button className="btn btn-default btn-md" onClick={() => uploadImage()}>
            <i className="glyphicon glyphicon-camera"></i>
        </button>

        <OverlayTrigger trigger="click" rootClose placement="left" overlay={IconPopOver}>
            <button className="btn btn-default btn-md" type="button">
                <i className="glyphicon glyphicon-apple"></i>
            </button>
        </OverlayTrigger>

        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            sendMessage(mesId, userId, msg.value, '', 'msg')
            msg.value = ''
          }
        }}>

        <div className="input-group">
          <FormControl
            style={styles.inputForm}
            inputRef={ref => { msg = ref }}
            placeholder="Enter message"
          />
        </div>

        <ModalUploadImageContainer/>
        
      </form>
    </div>
  )
}

const IconPopOver = (
  <Popover id="popover-trigger-click-root-close" title="Icons">
    <Nav bsStyle="tabs" activeKey={1}>
        <NavItem>
            <EmoNavContainer/>
        </NavItem>
    </Nav>
  </Popover>
)


export default ChatBottom
