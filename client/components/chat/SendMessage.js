import React from 'react'
import {FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap'

const SendMessage = (props) => {
  const {user} = props
  return (
    <form style={{position: 'relative'}}>
        <FormGroup controlId="formBasicText">
          <FormControl style={{width:750, float:'left'}}
            type="text"
            placeholder= {user.username}
          />

          <Button style={{float:'right'}}>
            Send
          </Button>
        </FormGroup>

      </form>
  )
}

export default SendMessage
