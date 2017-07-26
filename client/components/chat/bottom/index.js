import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button , OverlayTrigger, Popover, Nav, NavItem } from 'react-bootstrap'
import ModalUploadImageContainer from '~/containers/chat/bottom/ModalUploadImageContainer'
import EmoNavContainer from '~/containers/chat/bottom/EmoNavContainer'

const ChatBottom = ({mesId, userId, sendMessage}) => {
  let msg
  return (
    <div style={styles.inputForm}>

        <form onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            sendMessage(mesId, userId, msg.value, '', 'msg')
            msg.value = ''
          }
        }}>

        <div className="input-group" style={{width: '100%'}}>
          <FormControl style={styles.formControl}
            inputRef={ref => { msg = ref }}
            placeholder="Enter message"
          />
        </div>

        <button style={styles.iconButton} className="btn btn-default btn-md">
            <i className="glyphicon glyphicon-camera"></i>
        </button>

        <OverlayTrigger trigger="click" rootClose placement="left" overlay={IconPopOver}>
            <button style={styles.iconButton} className="btn btn-default btn-md" type="button">
                <i className="glyphicon glyphicon-apple"></i>
            </button>
        </OverlayTrigger>

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

const styles = {
  inputForm: {
    width: 320
  },
  inputDiv: {
    width: '100%'
  },
  iconButton: {
    fontSize: 13
  }
}

export default ChatBottom
