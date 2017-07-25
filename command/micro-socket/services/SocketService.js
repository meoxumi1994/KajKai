import socketIo from 'socket.io'

let io = socketIo();

export const emitNotification = (listId, event, data) => {
    for (let i = 0; i < listId.length; ++i) {
        io.to(listId[i]).emit('action', {type: event, data: data});
    }
};