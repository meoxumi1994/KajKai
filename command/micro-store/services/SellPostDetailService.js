import { SellPostDetail, Product } from '../models'
import globalId from '../config/globalId'
import { postRowCreatedPub, postRowDeletedPub, postRowUpdatedPub } from '../controllers/StorePubController'
import { getBasicProductInfo, createMultipleProduct } from '../services/ProductService'

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

export const removeBulk = (sellpostId, next) => {
    SellPostDetail.find({sellPostId: sellpostId}, (err, docs) => {
        SellPostDetail.deleteMany({sellPostId: sellpostId}, () => {
            for (let i = 0; i < docs.length; ++i)
                postRowDeletedPub(getSellPostDetailGlobalId(docs[i]._id), sellpostId);
            next();
        })
    });

};

export const getPubSellPostDetailBasicInfo = (sellPostDetail) => {
    return {
        sellPostId: sellPostDetail.sellPostId,
        content: sellPostDetail.content,
        numline: sellPostDetail.line,
        images: sellPostDetail.imageURLs,
        titleOrder: sellPostDetail.titleOrder,
        titles: sellPostDetail.titles,
        productOrders: sellPostDetail.productOrders,
        type: sellPostDetail.type,
        postrowId: getSellPostDetailGlobalId(sellPostDetail._id),
        products: sellPostDetail.products,
        storeId: sellPostDetail.storeId
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
                postRowUpdatedPub(getPubSellPostDetailBasicInfo(sellPostDetail));
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
        postRowCreatedPub(getPubSellPostDetailBasicInfo(sellPostDetail));
        next(sellPostInfo)
    })
};

export const createMultiplePostDetail = (listSellPostInfo, sellPostId, storeId, next) => {
    let docs = [];
    let productList = [];
    for (let i = 0; i < listSellPostInfo.length; ++i) {
        let sellPostInfo = listSellPostInfo[i];
        const sellPostDetail = new SellPostDetail({sellPostId: sellPostId, content: sellPostInfo.content,
            line: sellPostInfo.numline, imageURLs: sellPostInfo.images ? sellPostInfo.images : [], titlesOrder: sellPostInfo.titles_order,
            productOrders: sellPostInfo.products_order, type: sellPostInfo.type});
        docs.push(sellPostDetail);
        if (sellPostInfo.products) {
            for (let j = 0; j < sellPostInfo.products.length; ++j) {
                let curProduct = sellPostInfo.products[j];
                productList.push(new Product({content: curProduct.content, imageUrl: curProduct.imageUrl, list: curProduct.list, sellPostId: sellPostId,
                    sellPostDetailId: getSellPostDetailGlobalId(sellPostDetail._id)}));
            }
        }
    }

    SellPostDetail.insertMany(docs, () => {
        for (let i = 0; i < docs.length; ++i) {
            docs[i].storeId = storeId;
        }
        if (productList.length === 0) {
            let res = [];
            for (let i = 0; i < docs.length; ++i) {
                res.push(getBasicSellPostDetailInfo(docs[i]));
                postRowCreatedPub(getPubSellPostDetailBasicInfo(docs[i]));
            }
            next(res);
        } else {
            createMultipleProduct(productList, () => {
                let res = [];
                let j = 0;
                for (let i = 0; i < docs.length; ++i) {
                    let cur = docs[i];
                    cur.products = [];
                    cur.productOrders = [];
                    while (j < productList.length && productList[j].sellPostDetailId === getSellPostDetailGlobalId(docs[i]._id)) {
                        cur.products.push(getBasicProductInfo(productList[j]));
                        cur.productOrders.push(getBasicProductInfo(productList[j]).id);
                        j++;
                    }
                    res.push(getBasicSellPostDetailInfo(cur));
                    postRowCreatedPub(getPubSellPostDetailBasicInfo(cur));
                }
                next(res);
            })
        }
    });
};

export const getBasicSellPostDetailInfo = (sellPostDetail) => {
    return {
        sellPostId: sellPostDetail.sellPostId,
        id: getSellPostDetailGlobalId(sellPostDetail._id),
        content: sellPostDetail.content,
        numline: sellPostDetail.line,
        images: sellPostDetail.imageURLs,
        titles_order: sellPostDetail.titleOrder,
        titles: sellPostDetail.titles,
        products_order: sellPostDetail.productOrders,
        type: sellPostDetail.type,
        products: sellPostDetail.products
    }
};

