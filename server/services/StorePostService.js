import {StorePost} from '../models'
import {getMainPost} from './StoreService'
import {getListPostDetail} from './StorePostDetailService'

export const updateMainPost = (storeid, list, userID, next) => {
    getMainPost(storeid, function(store) {
        if (!store || !store.mainPost || store.owner !== userID) {
            next(null)
        } else {
            store.mainPost.list = getListPostDetail(list)
            store.save(function (err) {
                if (err) next(null)
                else next(list)
            })
        }
    })
}
