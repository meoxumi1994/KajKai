import { getListUserFromWithin } from '../controllers/FollowPubController'
import { emitNotification } from './SocketService'

export const notifyInterestUser = (store) => {
    getListUserFromWithin(store.longitude, store.latitude, secondCategoryId, 10000, (listId) => {
        emitNotification(listId, 'global/INTEREST_STORE', store);
    })
};