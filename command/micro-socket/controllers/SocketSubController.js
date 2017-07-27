import { notifyInterestUser } from '../services/PublishStoreService'
import { emitNotification } from '../services/SocketService'

export const notifyInterestSub = (message) => {
    const { id, storeName, urlName, avatarUrl, coverUrl,
          secondCategoryId, secondCategoryName, longitude, latitude} = message.store;
    notifyInterestUser({ id, storeName, urlName, avatarUrl, coverUrl,
        secondCategoryId, secondCategoryName, longitude, latitude })
};

export const getNotification = (message) => {
    const userId = message.notification.userId;
    const notifyData = message.notification.data;
    console.log('thus ' + JSON.stringify(message));
    emitNotification([userId], 'global/NOTIFICATION', notifyData);
};