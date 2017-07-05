import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'

const NewChat = ({onNewChatSubmit, user}) => {
  let conversator
  return (
    <label style={{backgroundColor: 'red', width: '100%'}}>
        <form style={{position: 'relative'}} onSubmit={e => {
          e.preventDefault()
          if (conversator.value.trim()) {
              onNewChatSubmit(null, user.id, conversator.value)
              conversator = ''
          }
        }}>
            <FormControl
              inputRef={ref => {conversator = ref}}
              placeholder="Nhập tên 1 người hoặc 1 nhóm..."
              style={{width: '100%', height: 70, marginTop: 1, fontSize: 15}}
            />
        </form>
    </label>
  )
}

export default NewChat
