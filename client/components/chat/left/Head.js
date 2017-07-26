import React from 'react'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const Head = ({createNewChat}) => {
  return (
    <div>
      <button onClick={() => createNewChat()} className="btn" style={styles.newChatBtn}>
          <img src='./images/newMessage.png' style={{width: 17, height: 17, marginRight: 10, marginLeft: 20}}/>
          Tin nhắn mới
      </button>
      <hr style={{marginTop: 10}}/>
    </div>
  )
}

export default Head

const styles = {
  newChatBtn: {
    backgroundColor: 'white',
  }
}
