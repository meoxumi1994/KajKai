import auth from './middlewares/auth'

export default {
    '/product': {
        post: {
            controller: 'ProductController',
            middleware: [auth()],
            method: 'createProductCon'
        },
        put: {
            controller: 'ProductController',
            middleware: [auth()],
            method: 'updateProductCon'
        },
        delete: {
            controller: 'ProductController',
            middleware: [auth()],
            method: 'deleteProductCon'
        }
    },
    '/postrows': {
        post: {
            controller: 'SellPostDetailController',
            middleware: [auth()],
            method: 'createSellPostDetailCon'
        },
        put: {
            controller: 'SellPostDetailController',
            middleware: [auth()],
            method: 'updateSellPostDetailCon'
        },
        delete: {
            controller: 'SellPostDetailController',
            middleware: [auth()],
            method: 'dellSellPostDetailCon'
        }
    },
    '/store': {
        post: {
            controller: 'StoreController',
            middleware: [auth()],
            method: 'addStoreCon'
        },
        put: {
            controller: 'StoreController',
            middleware: [auth()],
            method: 'updateStoreCon'
        }
    },
    '/sellpost': {
        post: {
            controller: 'SellPostController',
            middleware: [auth()],
            method: 'addSellPostCon'
        },
        put: {
            controller: 'SellPostController',
            middleware: [auth()],
            method: 'updateSellPostCon'
        },
        delete:{
            controller: 'SellPostController',
            middleware: [auth()],
            method: 'deleteSellPostCon'
        }
    },
    '/categorylist': {
        get: {
            controller: 'CategoryController',
            method: 'getCategoryListCon'
        }
    },
    '/search/category/:keyword': {
        get: {
            controller: 'CategoryController',
            method: 'searchCategoryCon'
        }
    }
}
