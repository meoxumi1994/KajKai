import { getStore, getStoreInfoService, getListStore } from '../services/StoreService'
import { getStoreFromSellPostId } from '../services/SellPostService'
import config from '../config/commonConfig'

export const getStoreSub = (message, next) => {
    getStore(message.storeId, (store) => {
        if (store) {
            next({status: 'success', store: getStoreInfoService(store)})
        } else {
            next({status: 'failed'})
        }
    })
};

export const getStoreFromPostSub = (message, next) => {
    const id = message.postId;
    if (id.toString().startsWith(config.SELLPOST_GLOBAL_ID)) {
        getStoreFromSellPostId(id, (store) => {
            if (store) {
                next({status: 'success', store: getStoreInfoService(store)});
            } else {
                next({status: 'failed'});
            }
        })
    }
};

export const getStoreListSub = (message, next) => {
    getListStore(message.storeIdList, (stores) => {
        if (stores) {
            next({status: 'success', stores: stores});
        } else {
            next({status: 'failed'});
        }
    })
};

