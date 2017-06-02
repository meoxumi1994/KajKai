import { Store, Category, StorePost } from '../models'
import { checkPhone } from '../utils/Utils'
import UserService from './UserService'

export const getStore = (id, next) => {
    Store.findById(id, function (err, store) {
        if (err) {
            next(null)
        } else {
            next(store)
        }
    })
}

export const getStoreInfoService = (store) => {
    return {
        storename: store.storename,
        address: store.address,
        phone: store.phone,
        category: store.category,
        longitude: store.longitude,
        latitude: store.latitude,
        id: store._id,
        avatarUrl: store.avatarUrl,
        coverUrl: store.coverUrl,
        owner: store.owner,
        mainPostId: (store.mainPost) ? store.mainPost._id : null
    }
}

export const getStoreBasicInfoService = (store) => {
    return {
        storename: store.storename,
        id: store._id,
        avatarUrl: store.avatarUrl,
        coverUrl: store.coverUrl
    }
}

export const validateStore = (store) => {
    if (!store.phone || !checkPhone(store.phone)) return false
    if (!store.address) return false
    if (!store.storename || store.storename.length < 5 || store.storename.length > 50) return false
    try {
        parseFloat(store.longitude)
        parseFloat(store.latitude)
        if (store.latitude < 0 || store.latitude > 90) return false
        if (store.longitude < 0 || store.longitude > 180) return false
    } catch (err) {
        return false
    }
    return true
}

export const addNewStore = (_ownerId, _storename, _address, _phone, _category, _longitude, _latitude, next) => {
    var store = new Store({storename: _storename,
                        address: _address,
                        phone: _phone,
                        category: _category,
                        longitude: _longitude,
                        latitude: _latitude,
                        owner: _ownerId})
    if (!validateStore(store)) {
        next(null)
        return
    }

    store.save(function(err) {
        if (err) {
            next(null)
        } else {
            next(store)
        }
    })
}

export const modifyStore = (updateStore, next) => {
    // var id = up, _ownerId, _storename, _address, _phone, _category, _longitude, _latitude
    var id = updateStore.id
    var _ownerId = updateStore.owner

    getStore(id, function (store) {
        if (!store) {
            next({status: 'error'})
        } else {
            if (_ownerId !== store.owner) {
                next({status: 'unauthorize'})
                return
            }
            if (updateStore.storename) store.storename = updateStore.storename
            if (updateStore.address) store.address = updateStore.address
            if (updateStore.phone) store.phone = updateStore.phone
            if (updateStore.category) store.category = updateStore.category
            if (updateStore.longitude) store.longitude = updateStore.longitude
            if (updateStore.latitude) store.latitude = updateStore.latitude
            if (updateStore.avatarUrl) store.avatarUrl = updateStore.avatarUrl
            if (updateStore.coverUrl) store.coverUrl = updateStore.coverUrl

            store.save(function(err){
                if (err) {
                    next({status: 'err'})
                } else {
                    next({status: 'success'})
                }
            })
        }
    })
}

export const findStoreList = (ownerId, next) => {
    Store.find({owner: ownerId}, function (err, stores) {
        if (err) {
            next(err)
        } else {
            var storeList = []
            for (var i = 0, mLength = stores.length; i < mLength; ++i) {
                storeList.push(getStoreBasicInfoService(stores[i]))
            }
            next(storeList)
        }
    })
}

export const getMainPost = (storeid, next) => {
    getStore(storeid, function (store) {
        if (!store) next(null)
        else {
            if (!store.mainPost) {
                store.mainPost = new StorePost();
                store.save(function(err){
                    if (!err) next(store)
                    else next(null)
                })
            } else {
                next(store)
            }
        }
    })
}

export const getStoreByMainPostId = (id, next) => {
    Store.findOne({'mainPost._id': id}, function (err, store) {
        // console.log(store)
        if (err) next(null)
        else next(store)
    })
}

// getStoreByMainPostId('5929b0a92d53f82b01c48419')

