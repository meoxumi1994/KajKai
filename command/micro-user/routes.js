import auth from './middlewares/auth'

export default {
    '/user': {
        post: {
            controller: 'RegisterController',
            method: 'registerNewUser'
        }
    },

    '/emailverification/:token': {
        get: {
            controller: 'RegisterController',
            method: 'confirmEmailVerification'
        }
    },

    '/phone': {
        put: {
            controller: 'PhoneController',
            middleware: [auth()],
            method: 'updateUserPhoneController'
        }
    },

    '/password': {
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'updateUserPassword'
        }
    },

    '/verifyphone': {
        put: {
            controller: 'PhoneController',
            middleware: [auth()],
            method: 'verifyPhone'
        }
    },

    '/logoutphone': {
        post: {
            controller: 'PhoneController',
            method: 'verifyLogout'
        }
    },

    '/login': {
        post: {
            controller: 'LoginController',
            method: 'loginEmail'
        }
    },

    '/logout': {
        get: {
            controller: 'LoginController',
            middleware: [auth()],
            method: 'logOutUser'
        }
    },

    '/updateuser': {
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'changeUserProfile'
        }
    },

    '/who': {
        get: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'getUserController'
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

    '/getawsimageurl': {
        post: {
            controller: 'AWSController',
            middleware: [auth()],
            method: 'getS3PutObjectSignedUrl'
        }
    },

    '/getuser': {
        post: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'getUserController'
        }
    }
}
