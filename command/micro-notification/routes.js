import auth from './middlewares/auth'

export default {
    '/interest': {
        post: {
            controller: 'ProductController',
            middleware: [auth()],
            method: 'addNewInterestCon'
        },
        delete: {
            controller: 'ProductController',
            middleware: [auth()],
            method: 'removeInterestCon'
        }
    }
}
