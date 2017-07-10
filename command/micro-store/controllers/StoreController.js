import { createStore, updateStore, getStoreBasicInfoService } from '../services/StoreService.js'

export const addStoreCon = () => {
    return (req, res) => {
        console.log(JSON.stringify(req.body));
        createStore(req.body, (store) => {
            res.json({...req.body, storeId: getStoreBasicInfoService(store).storeId, status: 'success'})
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