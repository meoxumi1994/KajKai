import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const Head = ({createNewChat, NEW_MESSAGE}) => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '100%', textAlign: 'center' }}>
      <button onClick={() => createNewChat()} className="btn" style={{ backgroundColor: 'white', height: 25, fontSize: 12, marginBottom: 10, textAlign: 'center' }}>
          <label>{NEW_MESSAGE}</label>
      </button>
    </div>
  )
}

export default Head

//<img src='/images/newMessage.png' style={{width: 15, height: 15, marginRight: 5}}/>
