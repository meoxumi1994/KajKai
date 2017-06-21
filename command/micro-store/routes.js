import auth from './middlewares/auth'

export default {
    '/postrows/product': {
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
    }
}
