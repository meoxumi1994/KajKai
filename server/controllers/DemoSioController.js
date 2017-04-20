export const handleSioDemo = (action, sio) => {

  if(action.type === 'server/SEND_MESSAGE'){

    sio.emit('action', {
      type: 'SEND_MESSAGE',
      message: action.message,
      author: action.token,
      id: Date.now()
    })
  }
}
