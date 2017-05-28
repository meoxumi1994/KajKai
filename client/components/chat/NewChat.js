import React from 'react'
import {FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap'

const NewChat = ({onNewChatSubmit}) => {
  let msg
  return (
    <div>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            onNewChatSubmit(msg.value)
          }
        }}>
            <input
              style={{width: 400}}
              ref={ref => { msg = ref }}
              placeholder="To"
            />
            <Button type="submit">
              Join
            </Button>
        </form>
    </div>
  )
}


export default NewChat
