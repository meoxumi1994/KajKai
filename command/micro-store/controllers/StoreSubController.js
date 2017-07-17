import { getStore, getStoreInfoService, getListStore } from '../services/StoreService'
import { getStoreFromSellPostId } from '../services/SellPostService'
import config from '../config/globalId'

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
    console.log('fuck this shit ' + JSON.stringify(message));
    console.log('shit fuck ' + id.toString(), id.toString().startsWith('012'));
    if (id.toString().startsWith(config.SELLPOST_GLOBAL_ID)) {
        console.log('this ' + JSON.stringify(id));
        getStoreFromSellPostId(id, (store) => {
            console.log('this ' + JSON.stringify(store));
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

