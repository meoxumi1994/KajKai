import auth from './middlewares/auth'
import phoneCheck from './middlewares/phoneChecking'

export default {
    '/emailverification/:token': {
        get: {
            controller: 'RegisterController',
            method: 'confirmEmailVerification'
        }
    },
    '/passwordreset/:token': {
        get: {
            controller: 'UserController',
            method: 'resetPasswordEmailCon'
        }
    },
    '/user': {
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
    '/phone/user': {
        put: {
            controller: 'PhoneController',
            middleware: [auth()],
            method: 'updateUserPhoneHandler'
        }
    },
    '/phoneverification': {
        post: {
          controller: 'PhoneController',
          // middleware: [auth(), phoneCheck()],
          method: 'verifyPhoneHandler'
        }
    },
    '/phonecodeverification': {
      post: {
        controller: 'PhoneController',
        // middleware: [auth(), phoneCheck()],
        method: 'verifyPhoneCodeHandler'
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
    },
    '/awsimageurl': {
        post: {
            controller: 'AWSController',
            middleware: [auth()],
            method: 'getS3PutObjectSignedUrl'
        }
    },
    '/block': {
        post: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'blockUserCon'
        },
        delete: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'unblockUserCon'
        }
    },
    '/reset': {
        post: {
            controller: 'UserController',
            method: 'resetPasswordCon'
        }
    }
}