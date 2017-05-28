import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

const NewChat = ({onNewChatSubmit}) => {
  let msg
  return (
    <div>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (msg.value.trim()) {
            onNewChatSubmit({id: msg.value})
          }
        }}>
        <div className="input-group">
              <FormControl
                style={{width:600}}
                inputRef={ref => { msg = ref }}
                placeholder="To"
              />
              <Button type="submit">
                Send
              </Button>
        </div>
        </form>
    </div>
  )
}

export default NewChat
