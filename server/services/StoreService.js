import { Store, Category } from '../models'
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

export const getStoreInfo = (store) => {
    return {
        storename: store.storename,
        address: store.address,
        phone: store.phone,
        category: store.category,
        longitude: store.longtitue,
        latitude: store.latitude,
        id: store._id
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

export const updateStore = (id, _ownerId, _storename, _address, _phone, _category, _longitude, _latitude, next) => {
    getStore(id, function (store) {
        if (!store) {
            next({status: 'error'})
        } else {
            if (_ownerId != store.owner) {
                next({status: 'unauthorize'})
                return
            }
            if (_storename) store.storename = _storename
            if (_address) store.address = _address
            if (_phone) store.phone = _phone
            if (_category) store.category = _category
            if (_longitude) store.longitude = _longitude
            if (_latitude) store.latitude = _latitude

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
            next(stores)
        }
    })
}