import { createProduct, updateProduct, deleteProduct, getBasicProductInfo } from '../services/ProductService'

export const createProductCon = () => {
    return (req, res) => {
        const sellpostid = req.body.sellpostid;
        const postrowsid = req.body.postrowsid;
        const productInfo = req.body.product;
        createProduct(sellpostid, postrowsid, productInfo, (product) => {
            res.json({sellpostid: sellpostid, postrowsid: postrowsid, product: getBasicProductInfo(product)});
        })
    }
};

export const updateProductCon = () => {
    return (req, res) => {
        const sellpostid = req.body.sellpostid;
        const postrowsid = req.body.postrowsid;
        const productid = req.body.productid;
        const productInfo = req.body.product;
        updateProduct(productid, productInfo, (product) => {
            res.json({sellpostid: sellpostid, postrowsid: postrowsid, product: getBasicProductInfo(product)});
        })
    }
};

export const deleteProductCon = () => {
    return (req, res) => {
        const sellpostid = req.body.sellpostid;
        const postrowsid = req.body.postrowsid;
        const productid = req.body.productid;
        const productOrder = req.body.products_order;
        deleteProduct(productid, postrowsid, sellpostid, () => {
            res.json(req.body)
        })
    }
};