import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

const AddMember = ({onNewChatSubmit}) => {
  let conversator
  return (
    <form style={{position: 'relative'}} onSubmit={e => {
      e.preventDefault()
      if (conversator.value.trim()) {
          console.log('--- ', conversator.value);
      }
    }}>
      <span className="input-group-btn">
        <div className="input-group">
              <FormControl
                inputRef={ref => {conversator = ref}}
                placeholder="Thêm thành viên..."

              />
        </div>
      </span>
    </form>
  )
}

  // style={{width: '100%', height: 40, marginTop: 18, fontSize: 15, display: visibility.top.addMemberDiv}}

export default AddMember
