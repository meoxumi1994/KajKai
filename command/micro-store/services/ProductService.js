import { Product } from '../models/index'
import { productCreatedPub, productDeletedPub, productUpdatedPub, allProductCreatedPub } from '../controllers/StorePubController'

const PRODUCT_GLOBAL_ID = require('../config/globalId').default.PRODUCT_GLOBAL_ID;

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
                productUpdatedPub(getPubProductInfo(product));
                next(product)
            })
        }
    })
};

export const deleteProduct = (productId, postrowId, sellPostId, next) => {
    Product.findOneAndRemove({_id: getProductLocalId(productId)}, () => {
        productDeletedPub(sellPostId, postrowId, productId);
        next(productId, postrowId, sellPostId)
    })
};

export const createProduct = (sellPostId, postRowId, productInfo, next) => {
    const product = new Product({content: productInfo, imageUrl: productInfo.imageUrl, list: productInfo.list, sellPostId: sellPostId,
        sellPostDetailId: postRowId});
    product.save(() => {
        productCreatedPub(getPubProductInfo(product));
        next(product)
    })
};

export const createMultipleProduct = (productList, next) => {
    Product.insertMany(productList, () => {
        next();
        for (let i = 0; i < productList.length; ++i) {
            productCreatedPub(getPubProductInfo(productList[i]));
        }
        allProductCreatedPub(getListProductPub(productList));
    })
};

export const getBasicProductInfo = (product) => {
    return {
        id: getProductGlobalId(product._id),
        content: product.content,
        imageUrl: product.imageUrl,
        list: product.list
    }
};

export const getPubProductInfo = (product) => {
    return {
        sellPostId: product.sellPostId,
        postrowsId: product.sellPostDetailId,
        productId: getProductGlobalId(product._id),
        product: {
            content: product.content,
            imageUrl: product.imageUrl,
            list: product.list
        }
    }
};

export const getListProductPub = (products) => {
    if (!products || products.length === 0) return null;
    const sellpostId = products[0].sellPostId;
    let content = '';

    for (let i = 0; i < products.length; ++i) {
        const cur = getPubProductInfo(products[i]);
        content += '&*(Z' + cur.productId + ' ' + cur.product.list[0] + ' &!&';
    }
    return {sellpostId, content};
};
