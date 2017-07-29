import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const Head = ({createNewChat}) => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
      <button onClick={() => createNewChat()} className="btn" style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
          <img src='/images/newMessage.png' style={{width: 20, height: 20}}/>
          <label style={{fontSize: 16, marginLeft: 10}}>Tin nhắn mới</label>
      </button>
      <hr style={{marginTop: 10}}/>
    </div>
  )
}

export default Head
