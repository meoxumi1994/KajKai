import auth from './middlewares/auth'

export default {

    '/user': {
        get: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'getUser'
        },
    },
}
