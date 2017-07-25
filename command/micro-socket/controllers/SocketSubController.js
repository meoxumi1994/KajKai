import { notifyInterestUser } from '../services/PublishStoreService'

export const notifyInterestSub = (message) => {
    const { id, storeName, urlName, avatarUrl, coverUrl,
          secondCategoryId, secondCategoryName, longitude, latitude} = message.store;
    notifyInterestUser({ id, storeName, urlName, avatarUrl, coverUrl,
        secondCategoryId, secondCategoryName, longitude, latitude })
};