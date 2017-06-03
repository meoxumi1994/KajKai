import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button , OverlayTrigger, Popover } from 'react-bootstrap'
import ModalUploadImageContainer from '~/containers/chat/bottom/ModalUploadImageContainer'
import IconPopOver from './IconPopOver'
// import IconPopOverContainer from '~/containers/chat/bottom/IconPopOverContainer'

const SendMessage = ({mesId, sendMessage, visibility, uploadImage}) => {
  let msg
  return (
    <div style={{padding: 10, display: visibility}}>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            sendMessage({mesId: mesId, text: msg.value})
            msg.value = ''
          }
        }}>
        <span className="input-group-btn">
          <div className="input-group">
                <FormControl
                  style={{width:750}}
                  inputRef={ref => { msg = ref }}
                  placeholder="Enter message"
                />

                <Button type="submit" style={{marginLeft: 10}}>
                  Send
                </Button>

                <button className="btn btn-default btn-md" onClick={(e) => uploadImage(e)}>
                    <i className="glyphicon glyphicon-camera"></i>
                </button>

                <OverlayTrigger trigger="click" rootClose placement="top" overlay={IconPopOver}>
                    <button className="btn btn-default btn-md" type="button">
                        <i className="glyphicon glyphicon-apple"></i>
                    </button>
                </OverlayTrigger>

          </div>
          <ModalUploadImageContainer/>
        </span>
      </form>
    </div>
  )
}



export default SendMessage
