import React from 'react'
import {FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap'

const SendMessage = ({sender, receiver, onSendMessageSubmit}) => {
  let msg
  return (
    <div>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            onSendMessageSubmit({
              msgId: sender+'&'+receiver,
              person: sender,
              message: msg.value
            })
            msg.value = ''
          }
        }}>
            <input
              style={{width: 400}}
              ref={ref => { msg = ref }}
              placeholder="Enter message"
            />
            <Button type="submit">
              Send
            </Button>
        </form>
    </div>
  )
}


export default SendMessage
