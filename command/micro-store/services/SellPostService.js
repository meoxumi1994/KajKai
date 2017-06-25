import { SellPost } from '../models'
import globalId from '../config/globalId'
import { getStore } from './StoreService'
import { sellPostCreated, sellPostDeleted, sellPostUpdated} from '../controllers/StorePubController'

const SELLPOST_GLOBAL_ID = globalId.SELLPOST_GLOBAL_ID

export const getSellPostGlobalId = (id) => {
    return SELLPOST_GLOBAL_ID + id
};

export const getSellPostLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3);
};

export const getSellPost = (sellPostId, next) => {
    SellPost.findById(getSellPostLocalId(sellPostId), (err, sellPost) => {
        next(sellPost)
    })
};

export const getSellPostBasicInfo = (sellPost) => {
    return {
        storeId: sellPost.storeId,
        category: sellPost.category,
        title: sellPost.title,
        description: sellPost.description,
        time: sellPost.time,
        status: sellPost.status,
        shippable: sellPost.shippable,
        sellPostDetailOrders: sellPost.sellPostDetailOrders
    };
};

export const addSellPost = (sellPostInfo, next) => {
    const sellPost = new SellPost({storeId: sellPostInfo.storeid, category: sellPostInfo.category,
        title: sellPostInfo.title, description: sellPostInfo.description, time: sellPostInfo.time,
        status: sellPostInfo.status, shippable: sellPostInfo.ship});
    sellPost.save(() => {
        getPubSellPostInfo(sellPost, (info) => {
           sellPostCreated(info);
        });
        next(sellPost)
    })
};

export const updateSellPost = (sellpostInfo, next) => {
    getSellPost(sellpostInfo.sellpostid, (sellPost) => {
        if (sellpostInfo.category) sellPost.category = sellpostInfo.category;
        if (sellpostInfo.title) sellPost.title = sellpostInfo.title;
        if (sellpostInfo.description) sellPost.description = sellpostInfo.description;
        if (sellpostInfo.time) sellPost.time = sellpostInfo.time;
        if (sellpostInfo.status) sellPost.status = sellpostInfo.status;
        if (sellpostInfo.ship) sellPost.shippable = sellpostInfo.ship;
        if (sellpostInfo.postrows_order) sellPost.sellPostDetailOrders = sellpostInfo.postrow_order;
        sellPost.save(() => {
            getPubSellPostInfo(sellPost, (info) => {
                sellPostUpdated(info);
            });
            next(sellPost);
        })
    })
};

export const deleteSellPost = (sellpostid, next) => {
    getSellPost(sellpostid, (sellPost) => {
        if (!sellPost) next(null);
        else {
            SellPost.findOneAndRemove({_id: getSellPostLocalId(sellpostid)}, () => {
                sellPostDeleted(sellPost.storeId, sellpostid);
                next(true)
            })
        }
    })
};

export const getPubSellPostInfo = (sellPost, next) => {
    getStore(sellPost.storeId, (store) => {
        next({
            sellPostId: getSellPostGlobalId(sellPost._id),
            storeId: sellPost.storeId,
            storeName: store.storeName,
            category: sellPost.category,
            title: sellPost.title,
            description: sellPost.description,
            time: sellPost.time,
            status: sellPost.time,
            ship: sellPost.shippable, // store viết vào có thể un
        })
    });
};
