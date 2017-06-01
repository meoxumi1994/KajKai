import React from 'react'
import {FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap'
import ModalUploadImageContainer from '~/containers/chat/bottom/ModalUploadImageContainer'

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

                <button className="btn btn-default btn-md" type="button">
                    <i className="glyphicon glyphicon-apple"></i>
                </button>
          </div>
          <ModalUploadImageContainer/>
        </span>
      </form>
    </div>
  )
}

const styles = {
  inputWrapper: {
    height: 32,
    width: 64,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    /*Using a background color, but you can use a background image to represent a button*/
    backgroundColor: '#DDF',
},
fileInput: {
    cursor: 'pointer',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 99,
    /*This makes the button huge. If you want a bigger button, increase the font size*/
    /*Opacity settings for all browsers*/
    opacity: 100,
    MozOpacity: 100,
}
}

export default SendMessage
