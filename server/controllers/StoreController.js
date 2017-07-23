import config from '../config/serverConfig'
import { addNewStore, modifyStore, getStore, getStoreInfoService } from '../services/StoreService.js'
import { encryptID, decryptID } from '../utils/Utils'

export const registerStore = () => {
    return (req, res) => {
        let body = req.body
        let storename = body.storename
        let address = body.address
        let phone = body.phone
        let category = body.category
        let longitude = body.longitude
        let latitude = body.latitude
        let ownerId = req.decoded._id
        addNewStore(ownerId, storename, address, phone, category, longitude, latitude,
            function (store) {
                if (!store) {
                    res.json({status: 'error'})
                } else {
                    res.json({status: 'success', store: getStoreInfoService(store)})
                }
            })
    }
}

export const updateStore = () => {
    return (req, res) => {
        let uStore = new Store(req.body.store)
        modifyStore(uStore, function (status) {
            res.json(status)
        })
    }
}

export const getStoreInfo = () => {
    return (req, res) => {
        const id = req.body.id
        console.log(id)
        getStore(id, function(store){
            if (store) {
                res.json({status: 'success', store: getStoreInfoService(store)});
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}