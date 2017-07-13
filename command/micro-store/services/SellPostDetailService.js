import { SellPostDetail } from '../models'
import globalId from '../config/globalId'
import { postRowCreatedPub, postRowDeletedPub, postRowUpdatedPub } from '../controllers/StorePubController'

const SELLPOST_DETAIL_GLOBAL_ID =  globalId.SELLPOST_DETAIL_GLOBAL_ID;

export const getSellPostDetailLocalId = (id) => {
    if (id.length <= 3) return id;
    return id.substr(3, id.length - 3);
};

export const getSellPostDetailGlobalId = (id) => {
    return SELLPOST_DETAIL_GLOBAL_ID + id
};

export const getSellPostDetail = (sellPostDetailId, next) => {
    SellPostDetail.findById(getSellPostDetailLocalId(sellPostDetailId), (err, sellPostDetail) => {
        next(sellPostDetail)
    })
};

export const getSellPostDetailBasicInfo = (sellPostDetail) => {
    return {
        sellPostId: sellPostDetail.sellPostId,
        content: sellPostDetail.content,
        line: sellPostDetail.line,
        imageUrl: sellPostDetail.imageURLs,
        titleOrder: sellPostDetail.titleOrder,
        titles: sellPostDetail.titles,
        productOrders: sellPostDetail.productOrders,
        type: sellPostDetail.type,
        id: getSellPostDetailGlobalId(sellPostDetail._id)
    }
};

export const updateSellPostDetail = (sellPostDetailId, updateInfo, next) => {
    getSellPostDetailGlobalId(sellPostDetailId, (sellPostDetail) => {
        if (!sellPostDetail) next(null);
        else {
            if (updateInfo.content) sellPostDetail.content = updateInfo.content;
            if (updateInfo.numline) sellPostDetail.line = updateInfo.numline;
            if (updateInfo.images) sellPostDetail.imageURLs = updateInfo.images;
            if (updateInfo.titles_order) sellPostDetail.titleOrder = updateInfo.titles_order;
            if (updateInfo.titles) sellPostDetail.titles = updateInfo.titles;
            if (updateInfo.products_order) sellPostDetail.productOrders = updateInfo.products_order;
            if (updateInfo.type) sellPostDetail.type = updateInfo.type;
            sellPostDetail.save(() => {
                postRowUpdatedPub(getPubBasicSellPostDetailInfo(sellPostDetail));
                next(sellPostDetail);
            })
        }
    })
};

export const dellSellPostDetail = (sellPostDetailId, next) => {
    getSellPostDetail(sellPostDetailId, (sellPostDetail) => {
       if (!sellPostDetail) next(null);
        else {
           SellPostDetail.findOneAndRemove({_id: getSellPostDetailLocalId(sellPostDetailId)}, () => {
               postRowDeletedPub(sellPostDetailId, sellPostDetail.sellPostId);
               next(sellPostDetail)
           })
       }
    });

};

export const createSellPostDetail = (sellPostInfo, next) => {
    const sellPostDetail = new SellPostDetail({sellPostId: sellPostInfo.sellpostid, content: sellPostInfo.content,
                    line: sellPostInfo.numline, imageURLs: sellPostInfo.images, titlesOrder: sellPostInfo.titles_order,
                    productOrders: sellPostInfo.products_order, type: sellPostInfo.type});
    sellPostDetail.save(() => {
        postRowCreatedPub(getPubBasicSellPostDetailInfo(sellPostDetail));
        next(sellPostInfo)
    })
};

export const createMultiplePostDetail = (listSellPostInfo, sellPostId, next) => {
    let docs = [];
    for (let i = 0; i < listSellPostInfo.length; ++i) {
        let sellPostInfo = listSellPostInfo[i];
        const sellPostDetail = new SellPostDetail({sellPostId: sellPostId, content: sellPostInfo.content,
            line: sellPostInfo.numline, imageURLs: sellPostInfo.images, titlesOrder: sellPostInfo.titles_order,
            productOrders: sellPostInfo.products_order, type: sellPostInfo.type});
        docs.push(sellPostDetail);
    }
    SellPostDetail.insertMany(docs, () => {
        let res = [];
        for (let i = 0; i < docs.length; ++i) {
            res.push(getSellPostDetailBasicInfo(docs[i]));
            postRowCreatedPub(getPubBasicSellPostDetailInfo(docs[i]));
        }
        next(res);
    });
};

export const getPubBasicSellPostDetailInfo = (sellPostDetail) => {
    return {
        sellPostId: sellPostDetail.sellPostId,
        postrowId: getSellPostDetailGlobalId(sellPostDetail._id),
        content: sellPostDetail.content,
        numline: sellPostDetail.line,
        images: sellPostDetail.imageURLs,
        titles_order: sellPostDetail.titleOrder,
        titles: sellPostDetail.titles,
        products_order: sellPostDetail.productOrders,
        type: sellPostDetail.type,
    }
};

