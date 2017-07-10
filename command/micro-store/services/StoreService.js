import { Store, Category, Certificate } from '../models'
import { checkPhone } from '../utils/utils'
import globalId from '../config/globalId'
import { createStorePub, updateStorePub } from '../controllers/StorePubController'

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

    if (storeInfo.storename.length < 6) {
        next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
        return;
    }
    if (!storeInfo.firstCategoryId || !storeInfo.secondCategoryId || !storeInfo.category || storeInfo.category.length < 3) {
        next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
        return;
    }
    if (!storeInfo.phone){
        next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
        return;
    }
    if (!storeInfo.address.length || storeInfo.address.length < 6) {
        next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
        return;
    }
    if (!(/^[a-z]*$/.test(storeInfo.urlname)) && storeInfo.urlname !== '_' ) {
        next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
        return;
    }

    let certificate = null;
    if (storeInfo.certificates) {
        certificate = new Certificate(storeInfo.certificates);
    }
    const store = new Store({storeName: storeInfo.storename, phone: storeInfo.phone,
        category: storeInfo.category, owner: storeInfo.userid,
        firstCategoryId: storeInfo.firstCategoryId, secondCategoryId: storeInfo.secondCategoryId,
        avatarUrl: storeInfo.avatarUrl,
        coverUrl: storeInfo.coverUrl,
        address: storeInfo.address,
        addressMap: storeInfo.addressMap,
        longitude: storeInfo.position ? storeInfo.position.longitude : null,
        latitude: storeInfo.position ? storeInfo.position.latitude : null,
        certificates: certificate,
        createdAt: storeInfo.time,
        urlName: storeInfo.urlname
    });
    console.log('store ' + JSON.stringify(store));
    console.log('storeInfo ' + JSON.stringify(storeInfo));
    store.save(() => {
        next(store);
        createStorePub(getPubStoreInfo(store));
    })
};

export const updateStore = (storeInfo, next) => {
    getStore(storeInfo.id, (store) => {
        if (storeInfo.storename) {
            store.storeName = storeInfo.storename;
            if (storeInfo.storename.length < 6) {
                next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
                return;
            }
        }
        if (storeInfo.phone) {
            store.phone = storeInfo.phone;
            if (!storeInfo.phone){
                next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
                return;
            }
        }
        if (storeInfo.avatarUrl) store.avatarUrl = storeInfo.avatarUrl;
        if (storeInfo.coverUrl) store.coverUrl = storeInfo.coverUrl;
        if (storeInfo.address) {
            store.address = storeInfo.address;
            if (!storeInfo.address.length || storeInfo.address.length < 6) {
                next('INST_REGISTER_STORE_SHOW_MODAL_FAILED');
                return;
            }
        }
        if (storeInfo.addressMap) store.addressMap = storeInfo.addressMap;
        if (storeInfo.longitude) store.longitude = storeInfo.longitude;
        if (storeInfo.latitude) store.latitude = storeInfo.latitude;
        if (storeInfo.certificates) {
            store.certificates = new Certificate(storeInfo.certificates);
        }
        if (storeInfo.lastUpdate) {
            if (storeInfo.lastUpdate.storename) store.lastUpdateStoreName = storeInfo.lastUpdate.storename;
            if (storeInfo.lastUpdate.avatarUrl) store.lastUpdateAvatarUrl = storeInfo.lastUpdate.avatarUrl;
            if (storeInfo.lastUpdate.coverUrl) store.lastUpdateCoverUrl = storeInfo.lastUpdate.coverUrl;
        }
        store.save(() => {
            updateStorePub(getPubStoreInfo(store));
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
};

export const getPubStoreInfo = (store) => {
    return {
        id: getStoreGlobalId(store._id),
        owner: store.owner,
        storeName: store.storeName,
        avatarUrl: store.avatarUrl,
        coverUrl: store.coverUrl,
        address: store.address,
        addressMap: store.addressMap,
        category: store.category,
        firstCategoryId: store.firstCategoryId,
        secondCategoryId: store.secondCategoryId,
        longitude: store.longitude,
        latitude: store.latitude,
        phone: store.phone,
        certificates: store.certificates,
        urlName: store.urlName,
        createdAt: store.createdAt,
        lastUpdate: {
            lastUpdateStoreName: store.lastUpdateStoreName,
            lastUpdateAvatarUrl: store.lastUpdateAvatarUrl,
            lastUpdateCoverUrl: store.lastUpdateCoverUrl
        }
    }
};

export const getStoreListInfo = (storeList) => {
    if (!storeList) {
        return null;
    }
    var storeListInfo = [];
    for (var i = 0; i < storeList.length; ++i) {
        storeListInfo.push(getStoreListInfo(storeList[i]));
    }
};

export const getListStore = (storeIdList, next) => {
    var list = [];
    for (var i = 0; i < storeIdList.length; ++i) {
        list.push(mongoose.Type.ObjectId(getStoreLocalId(storeIdList[i])));
    }
    Store.find({_id: {$in: list}}, (err, docs) => {
        next(getStoreListInfo(docs));
    })
};

