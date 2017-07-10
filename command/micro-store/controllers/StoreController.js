import { createStore, updateStore, getStoreBasicInfoService } from '../services/StoreService.js'

export const addStoreCon = () => {
    return (req, res) => {
        console.log(JSON.stringify(req.body));
        createStore({...req.body, userid: req.user.id}, (store) => {
            console.log(store instanceof String);
            if (store instanceof String) {
                res.json({error: store})
            } else {
                res.json({...req.body, storeId: getStoreBasicInfoService(store).id, status: 'success'})
            }
        })
    }
};

export const updateStoreCon = () => {
    return (req, res) => {
        updateStore(req.body, (store) => {
            if (store instanceof String) {
                res.json({error: store})
            } else {
                res.json({...req.body, status: 'success'});
            }
        })
    }
};