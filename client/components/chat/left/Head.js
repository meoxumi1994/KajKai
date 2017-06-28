import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const Head = ({createNewChat}) => {
  return (
    <div>
      <div style={{width: '75%', marginLeft: 25, height: 25}}>
          <FormControl type="text" placeholder="Search" style={{borderRadius: 20, height: 45, marginTop: 12}} />
      </div>
      <div style={{width: '15%', height: 42, position: 'absolute', right: 20, top: 10}}>
          <button onClick={() => createNewChat()} className="btn" style={{width: 45, height: 45, backgroundColor: 'white', borderRadius: 50, float: 'right', borderWidth: 1, borderColor: 'grey'}}>
              <img src='./images/newMessage.png' style={{width: 20, height: 20}}/>
          </button>
      </div>
      <hr style={{marginTop: 45}}/>
    </div>
  )
}

export default Head
