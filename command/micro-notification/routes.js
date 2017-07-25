import auth from './middlewares/auth'

export default {
    '/interest': {
        post: {
            controller: 'InterestController',
            middleware: [auth()],
            method: 'addNewInterestCon'
        },
        delete: {
            controller: 'InterestController',
            middleware: [auth()],
            method: 'removeInterestCon'
        }
    }
}
