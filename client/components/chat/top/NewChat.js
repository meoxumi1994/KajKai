import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

const NewChat = ({onNewChatSubmit, visibility}) => {
  let msg
  return (
    <form style={{position: 'relative', float: 'left'}} onSubmit={e => {
      e.preventDefault()
      if (msg.value.trim()) {
        onNewChatSubmit(msg.value)
      }
    }}>
        <div className="input-group">
            <FormControl
              style={{width:600}}
              inputRef={ref => { msg = ref }}
              placeholder="To"
            />
        </div>
    </form>
  )
}

export default NewChat
