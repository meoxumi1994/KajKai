import { Store, Category, Certificate } from '../models'
import { checkPhone } from '../utils/Utils'
import globalId from '../config/globalId'

const GLOBAL_STORE_ID = globalId.STORE_GLOBAL_ID;

export const getStore = (id, next) => {
    Store.findById(getStoreLocalId(id), function (err, store) {
        if (err) {
            next(null)
        } else {
            next(store)
        }
    })
};

export const getStoreLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length)
};

export const getStoreGlobalId = (id) => {
    return GLOBAL_STORE_ID + id
};

export const getStoreInfoService = (store) => {
    return {
        storeName: store.storeName, phone: store.phone,
        category: store.category, owner: store.owner,
        avatarUrl: store.avatarUrl,
        coverUrl: store.coverUrl,
        address: store.address,
        addressMap: store.addressMap,
        longitude: store.longitude,
        latitude: store.latitude,
        certificates: store.certificates,
        storeId: getStoreGlobalId(store._id)
    }
};

export const getStoreBasicInfoService = (store) => {
    return {
        storeName: store.storeName,
        id: getStoreGlobalId(store._id),
        avatarUrl: store.avatarUrl,
        coverUrl: store.coverUrl
    }
};

export const validateStore = (store) => {
    if (!store.phone || !checkPhone(store.phone)) return false
    if (!store.address) return false
    if (!store.storename || store.storename.length < 5 || store.storename.length > 50) return false;
    return true
};


export const createStore = (storeInfo, next) => {
    var certificate = null;
    if (storeInfo.certificates) {
        certificate = new Certificate(storeInfo.certificates);
    }
    const store = new Store({storeName: storeInfo.storename, phone: storeInfo.phone,
                            category: storeInfo.category, owner: storeInfo.userid,
                            avatarUrl: storeInfo.avatarUrl,
                            coverUrl: storeInfo.coverUrl,
                            address: storeInfo.address,
                            addressMap: storeInfo.addressMap,
                            longitude: storeInfo.longitude,
                            latitude: storeInfo.latitude,
                            certificates: certificate
                        });
    store.save(() => {
        next(store)
    })
};

export const updateStore = (storeInfo, next) => {
    getStore(storeInfo.id, (store) => {
        if (storeInfo.storename) store.storeName = storeInfo.storename;
        if (storeInfo.phone) store.phone = storeInfo.phone;
        if (storeInfo.category) store.category = storeInfo.category;
        if (storeInfo.avatarUrl) store.avatarUrl = storeInfo.avatarUrl;
        if (storeInfo.coverUrl) store.coverUrl = storeInfo.coverUrl;
        if (storeInfo.address) store.address = storeInfo.address;
        if (storeInfo.addressMap) store.addressMap = storeInfo.addressMap;
        if (store.longitude) store.longitude = storeInfo.longitude;
        if (store.latitude) store.latitude = storeInfo.latitude;
        if (store.certificates) {
            store.certificates = new Certificate(storeInfo.certificates);
        }
        store.save(() => {
            next(store);
        })
    })
};

export const getStoreByPostId = (id, next) => {
    getPost(id, function (storePost) {
        if (!storePost) next(null)
        else {
            getStore(storePost.storeId, function (store) {
                next(store)
            })
        }
    })
}