import { createStore, updateStore, getStoreBasicInfoService } from '../services/StoreService.js'

export const addStoreCon = () => {
    return (req, res) => {
        console.log(JSON.stringify(req.body));
        createStore({...req.body, userid: req.user.id}, (store) => {
            console.log(typeof store === 'string');
            if (typeof store === 'string') {
                res.json({error: store})
            } else {
                res.json({...req.body, storeId: getStoreBasicInfoService(store).id, status: 'success'})
            }
        })
    }
};

export const updateStoreCon = () => {
    return (req, res) => {
        updateStore(req.body, req.user.id, (store) => {
            if (typeof store === 'string') {
                res.json({error: store})
            } else {
                res.json({store: req.body, status: 'success'});
            }
        })
    }
};
