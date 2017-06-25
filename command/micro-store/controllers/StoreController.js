import { createStore, updateStore, getStoreBasicInfoService } from '../services/StoreService.js'

export const addStoreCon = () => {
    return (req, res) => {
        createStore(req.body, (store) => {
            res.json({...req.body, storeId: getStoreBasicInfoService(store).storeId})
        })
    }
};

export const updateStoreCon = () => {
    return (req, res) => {
        updateStore(req.body, (store) => {
            res.json(req.body);
        })
    }
};