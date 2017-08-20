import { Store, Category, Certificate } from '../models'
import { checkPhone } from '../utils/utils'
import globalId from '../config/globalId'
import { createStorePub, updateStorePub } from '../controllers/StorePubController'
import { getCategoryName } from './CategoryService'

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
        urlName: store.urlName,
        storeId: getStoreGlobalId(store._id),
        firstCategoryId: store.firstCategoryId,
        secondCategoryId: store.secondCategoryId,
        firstCategoryName: store.firstCategoryName,
        secondCategoryName: store.secondCategoryName
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

export const verifyStoreInfo = (storeInfo, next) => {
    if (!storeInfo.storename || storeInfo.storename.length < 6) {
        next('name');
        return;
    }
    if (!storeInfo.firstCategoryId || !storeInfo.secondCategoryId || !storeInfo.category || storeInfo.category.length < 3) {
        next('category');
        return;
    }
    if (!storeInfo.phone){
        next('phone');
        return;
    }
    if (!storeInfo.address.length || storeInfo.address.length < 6) {
        next('address');
        return;
    }
    if (!storeInfo.position) {
        next('position');
        return;
    }
    next(null);
};

export const createStore = (storeInfo, next) => {

    verifyStoreInfo(storeInfo, (verRes) => {
        if (verRes) {
            next(verRes);
            return;
        }
        if (!storeInfo.urlname || (!(/^[a-z]*$/.test(storeInfo.urlname)) && storeInfo.urlname !== '_' )) {
            next('urlname');
        } else {
            Store.findOne({urlName: storeInfo.urlname}, (err, docs) => {
                if (docs) {
                    next('urlname');
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
                    longitude: storeInfo.position ? storeInfo.position.lng : null,
                    latitude: storeInfo.position ? storeInfo.position.lat : null,
                    certificates: certificate,
                    createdAt: storeInfo.time,
                    urlName: storeInfo.urlname
                });
                // console.log('store ' + JSON.stringify(store));
                // console.log('storeInfo ' + JSON.stringify(storeInfo));
                store.save(() => {
                    next(store);
                    getPubStoreInfo(store, (info) => {
                        createStorePub(info);
                    });
                })
            })
        }
    });
};

export const updateStore = (storeInfo, userId, next) => {
    getStore(storeInfo.id, (store) => {
        if (!store || store.owner !== userId) {
            next('failed');
            return
        }
        if (storeInfo.storename) {
            store.storeName = storeInfo.storename;
            if (storeInfo.storename.length < 6) {
                next('name');
                return;
            }
        }
        if (storeInfo.phone) {
            store.phone = storeInfo.phone;
            if (!storeInfo.phone){
                next('phone');
                return;
            }
        }
        if (storeInfo.avatarUrl) store.avatarUrl = storeInfo.avatarUrl;
        if (storeInfo.coverUrl) store.coverUrl = storeInfo.coverUrl;
        if (storeInfo.address) {
            store.address = storeInfo.address;
            if (!storeInfo.address.length || storeInfo.address.length < 6) {
                next('address');
                return;
            }
        }
        if (storeInfo.addressMap) store.addressMap = storeInfo.addressMap;
        if (storeInfo.position) {
            if (storeInfo.position.lng) store.longitude = storeInfo.position.lng;
            if (storeInfo.position.lat) store.latitude = storeInfo.position.lat;
        }
        if (storeInfo.certificates) {
            store.certificates = new Certificate(storeInfo.certificates);
        }
        if (storeInfo.lastUpdate) {
            if (storeInfo.lastUpdate.storename) store.lastUpdateStoreName = storeInfo.lastUpdate.storename;
            if (storeInfo.lastUpdate.avatarUrl) store.lastUpdateAvatarUrl = storeInfo.lastUpdate.avatarUrl;
            if (storeInfo.lastUpdate.coverUrl) store.lastUpdateCoverUrl = storeInfo.lastUpdate.coverUrl;
        }
        store.save(() => {
            getPubStoreInfo(store, (info) => {
                updateStorePub(info);
            });
            next(store);
        })
    })
};

export const getStoreByPostId = (id, next) => {
    getPost(id, function (storePost) {
        if (!storePost) next(null);
        else {
            getStore(storePost.storeId, function (store) {
                next(store)
            })
        }
    })
};

export const getPubStoreInfo = (store, next) => {
    getCategoryName(store.firstCategoryId, store.secondCategoryId, (names) => {
        next({
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
            },
            firstCategoryName: names.parentName,
            secondCategoryName: names.childName
        })
    });
};

export const getStoreListInfo = (storeList) => {
    if (!storeList) {
        return null;
    }
    let storeListInfo = [];
    for (let i = 0; i < storeList.length; ++i) {
        storeListInfo.push(getStoreListInfo(storeList[i]));
    }
};

export const getListStore = (storeIdList, next) => {
    let list = [];
    for (let i = 0; i < storeIdList.length; ++i) {
        list.push(mongoose.Type.ObjectId(getStoreLocalId(storeIdList[i])));
    }
    Store.find({_id: {$in: list}}, (err, docs) => {
        next(getStoreListInfo(docs));
    })
};
