import { SellPost } from '../models'
import globalId from '../config/globalId'
import { getStore } from './StoreService'
import { sellPostCreated, sellPostDeleted, sellPostUpdated, updateFollowPub } from '../controllers/StorePubController'
import { createMultiplePostDetail, removeBulk } from './SellPostDetailService'

const SELLPOST_GLOBAL_ID = globalId.SELLPOST_GLOBAL_ID;

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

export const addSellPost = (sellPostInfo, next) => {
    const sellPost = new SellPost({storeId: sellPostInfo.storeid, category: sellPostInfo.category,
        title: sellPostInfo.title, description: sellPostInfo.description, time: sellPostInfo.time ? sellPostInfo.time : (new Date()).getTime(),
        status: sellPostInfo.status, shippable: sellPostInfo.ship, sellPostDetailOrders: []});
    sellPost.save(() => {
        getStore(sellPost.storeId, (store) => {
            updateFollowPub(store.owner, null, getSellPostGlobalId(sellPost._id), (follow) => {});
            getPubSellPostInfo(sellPost, (info) => {
                let sellPostDetail = sellPostInfo.postrows;
                if (sellPostDetail && sellPostDetail.length > 0) {
                    createMultiplePostDetail(sellPostDetail, getSellPostGlobalId(sellPost._id), info.storeId, (sellPostDetail) => {
                        sellPost.sellPostDetailOrders = [];
                        for (let i = 0; i < sellPostDetail.length; ++i)
                            sellPost.sellPostDetailOrders.push(sellPostDetail[i].id);
                        info.postrows_order = sellPost.sellPostDetailOrders;
                        sellPost.save(() => {
                            next(sellPost, sellPostDetail);
                        });
                        sellPostCreated({...info, owner: store.owner});
                    });
                } else {
                    next(sellPost, null);
                }
            });
        });
    })
};

export const updateSellPostStatus = (sellpostInfo, next) => {
    getSellPost(sellpostInfo.sellpostid, (sellPost) => {
        sellPost.status = sellpostInfo.status;
        sellPost.save(() => {
            getPubSellPostInfo(sellPost, (info) => {
                sellPostUpdated({...info, changeStatus: true});
                next();
            })
        })
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
        if (sellpostInfo.postrows_order) sellPost.sellPostDetailOrders = sellpostInfo.postrows_order;
        sellPost.save(() => {
            removeBulk(sellpostInfo.sellpostid, () => {
                getPubSellPostInfo(sellPost, (info) => {
                    let sellPostDetail = sellpostInfo.postrows;
                    if (sellPostDetail && sellPostDetail.length > 0) {
                        createMultiplePostDetail(sellPostDetail, getSellPostGlobalId(sellPost._id), info.storeId, (sellPostDetail) => {
                            sellPost.sellPostDetailOrders = [];
                            for (let i = 0; i < sellPostDetail.length; ++i)
                                sellPost.sellPostDetailOrders.push(sellPostDetail[i].id);
                            info.postrows_order = sellPost.sellPostDetailOrders;
                            sellPost.save(() => {
                                next(sellPost, sellPostDetail);
                            });
                            sellPostUpdated(info);
                        });
                    } else {
                        sellPostUpdated(info);
                        next(sellPost, null);
                    }
                });
            });


            // getPubSellPostInfo(sellPost, (info) => {
            //     sellPostUpdated(info);
            // });
            // next(sellPost);
        })
    })
};

export const getSellPostBasicInfo = (sellPost) => {
    return {
        storeid: sellPost.storeId,
        category: sellPost.category,
        title: sellPost.title,
        description: sellPost.description,
        time: sellPost.time,
        status: sellPost.status,
        ship: sellPost.shippable,
        postrows_order: sellPost.sellPostDetailOrders,
        id: getSellPostGlobalId(sellPost._id),
        likes: [],
        numlike: 0,
        likestatus: ['like'],
        follows: [],
        follow: 0,
        leadercomments: []
    };
};

export const deleteSellPost = (sellpostid, next) => {
    getSellPost(sellpostid, (sellPost) => {
        if (!sellPost) next(null);
        else {
            sellPost.remove(() => {
                sellPostDeleted(sellPost.storeId, sellpostid);
                next(true);
            })
        }
    })
};

export const getPubSellPostInfo = (sellPost, next) => {
    getStore(sellPost.storeId, (store) => {
        console.log('this store ' + JSON.stringify(store));
        next({
            sellPostId: getSellPostGlobalId(sellPost._id),
            storeId: sellPost.storeId,
            storeName: store.storeName,
            category: sellPost.category,
            title: sellPost.title,
            description: sellPost.description,
            time: sellPost.time,
            status: sellPost.status ? sellPost.status : 'notyet',
            ship: sellPost.shippable, // store viết vào có thể un,
            postrows_order: sellPost.sellPostDetailOrders,
        })
    });
};

export const getStoreFromSellPostId = (sellPostId, next) => {
    getSellPost(sellPostId, (sellPost) => {
        getStore(sellPost.storeId, (store) => {
            next(store);
        })
    })
};
