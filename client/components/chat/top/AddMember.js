import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

const AddMember = ({addMember, user, mesId, chatListMap, styles}) => {
  let conversator
  return (
    <form style={styles.addMemberDiv} onSubmit={e => {
      e.preventDefault()
      if (conversator.value.trim()) {
          addMember(mesId, user.id, conversator.value, chatListMap[mesId].usersKey)
          conversator = ''
      }
    }}>
      <span className="input-group-btn">
        <div className="input-group" style={{width: '100%'}}>
              <FormControl
                inputRef={ref => {conversator = ref}}
                placeholder="Thêm thành viên..."
                style={{width: '100%', height: 40, marginTop: 18, fontSize: 15}}
              />
        </div>
      </span>
    </form>
  )
}

export default AddMember
