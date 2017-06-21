import { Product } from '../models/index'

const PRODUCT_GLOBAL_ID = require('../config/globalId').default.PRODUCT_GLOBAL_ID

export const getProductGlobalId = (id) => {
    return PRODUCT_GLOBAL_ID + id
};

export const getProductLocalId = (id) => {
    if (id.length <= 3) return id;
    return id.substr(3, id.length - 3);
};

export const getProduct = (productId, next) => {
    Product.findById(getProductLocalId(productId), (err, product) => {
        next(product)
    })
};

export const updateProduct = (productId, updateInfo, next) => {
    getProduct(productId, (product) => {
        if (!product) {
            next(null)
        } else {
            if (updateInfo.content) product.content = updateInfo.content;
            if (updateInfo.imageUrl) product.imageUrl = updateInfo.imageUrl;
            if (updateInfo.list) product.list = updateInfo.list;
            product.save(() => {
                next(product)
            })
        }
    })
};

export const deleteProduct = (productId, postrowId, sellPostId, next) => {
    Product.findOneAndRemove({_id: getProductLocalId(productId)}, () => {
        next(productId, postrowId, sellPostId)
    })
};

export const createProduct = (sellPostId, postRowId, productInfo, next) => {
    const product = new Product({content: productInfo, imageUrl: productInfo.imageUrl, list: productInfo.list, sellPostId: sellPostId,
        sellPostDetailId: postRowId});
    product.save(() => {
        next(product)
    })
};

export const getBasicProductInfo = (product) => {
    return {
        id: getBasicProductInfo(product._id),
        content: product.content,
        imageUrl: product.imageUrl,
        list: product.list
    }
};