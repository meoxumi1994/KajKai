import React from 'react'
import {FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap'

const SendMessage = ({mesId, onSendMessageSubmit, visibility}) => {
  let msg
  return (
    <div style={{padding: 10, display: visibility}}>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            onSendMessageSubmit({mesId: mesId, text: msg.value})
            msg.value = ''
          }
        }}>
          <div className="input-group">
                <FormControl
                  style={{width:750}}
                  inputRef={ref => { msg = ref }}
                  placeholder="Enter message"
                />
                <Button type="submit" style={{marginLeft: 10}}>
                  Send
                </Button>
          </div>
        </form>
    </div>
  )
}


export default SendMessage
