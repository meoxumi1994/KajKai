
export const emitNotification = (io, listId, event, data) => {
    for (let i = 0; i < listId.length; ++i) {
        io.to(listId[i]).emit('action', {type: event, data: data});
    }
};