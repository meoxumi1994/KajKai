import { emitNotification } from '../services/SocketService'

export const getNotification = (message) => {
    const userId = message.notification.userId;
    const notifyData = message.notification.data;
    console.log('thus ' + JSON.stringify(message));
    emitNotification([userId], 'global/NOTIFICATION', notifyData);
};