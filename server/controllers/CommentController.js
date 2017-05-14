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

export const textSockIO = (action, sio) => {
    // if (action.type == '') {
    console.log(action)
        // sio.emit('hello', {
        //     abc: 'def'
        // })
    // }
    sio.join(action.hello)
}

export const transerMessage = (action, sio) => {
    console.log(action)
    sio.to(action.room).emit('nhan', action.message)
}

export const subcribe = (action, sio) => {
    sio.join(action.room)
}

export const unsubcribe = (action, sio) => {
    sio.leave(action.room)
}

export const comment = (action, sio) => {
    console.log(action)
    sio.to(action.room).emit('new_message', action.message)
}