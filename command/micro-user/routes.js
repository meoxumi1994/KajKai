import auth from './middlewares/auth'

export default {

    '/emailverification/:token': {
        get: {
            controller: 'RegisterController',
            method: 'confirmEmailVerification'
        }
    },
    '/user': {
        get: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'getUserTrivial'
        },
        post: {
            controller: 'RegisterController',
            method: 'registerNewUser'

        },
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'changeUserProfile'
        }
    },
    '/password': {
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'updateUserPassword'
        }
    },
    '/user/phone': {
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'changeUserPhone'
        }
    },
    '/login': {
       post: {
           controller: 'LoginController',
           method: 'loginEmail'
       }
    },
    '/loginfacebook': {
        post: {
            controller: 'LoginController',
            method: 'loginFacebook'
        }
    },
    '/logingoogle': {
        post: {
            controller: 'LoginController',
            method: 'loginGoogle'
        }
    },
    '/logout': {
        get: {
            controller: 'LoginController',
            middleware: [auth()],
            method: 'logOutUser'
        }
    }
}
