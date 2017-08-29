import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const Head = ({createNewChat, NEW_MESSAGE}) => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '100%', textAlign: 'center'}}>
      <div onClick={() => createNewChat()} className="btn" style={{fontWeight: 'bold', backgroundColor: 'white', height: 25, fontSize: 12, marginBottom: 10, textAlign: 'center' }}>
          {NEW_MESSAGE}
      </div>
    </div>
  )
}

export default Head

//<img src='/images/newMessage.png' style={{width: 15, height: 15, marginRight: 5}}/>
