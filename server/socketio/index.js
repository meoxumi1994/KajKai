import socketIo from 'socket.io'
import allEvents from './events'
import { validateTokenDemo } from '../services/DemoService'

const init = (server) => {
  const sio = socketIo(server)

  sio.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('a user disconnected')
    })

    // load all events
    for(let e in allEvents){

      let handler = allEvents[e]
      let method = require('../controllers/' + handler.controller)[handler.method]
      socket.on(e, (action) => {
        if(validateTokenDemo(action.token)) {
          method(action, sio)
        } else {
          socket.emit('action', {
            type: 'NOT_LOGGED_IN'
          })
        }
      })
    }
  })
  return sio
}

export default init
