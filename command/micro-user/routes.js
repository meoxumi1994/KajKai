import auth from './middlewares/auth'
import phoneCheck from './middlewares/phoneChecking'

export default {

    '/emailverification/:token': {
        get: {
            controller: 'RegisterController',
            method: 'confirmEmailVerification'
        }
    },
    '/user': {
        // get: {
        //     controller: 'UserController',
        //     middleware: [auth()],
        //     method: 'getUserTrivial'
        // },
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
          middleware: [auth(), phoneCheck()],
          method: 'verifyPhoneHandler'
        }
    },
    '/phonereverification': {
        post: {
          controller: 'PhoneController',
          middleware: [auth(), phoneCheck()],
          method: 'reverifyPhoneHandler'
        }
    },
    '/phonecodeverification': {
      post: {
        controller: 'PhoneController',
        middleware: [auth(), phoneCheck()],
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
    '/blacklist': {
        put: {
            controller: 'UserController',
            middleware: [auth()],
            method: 'blackList'
        }
    },
    '/phone/logout': {
      post: {
        controller: 'PhoneController',
        method: 'out'
      }
    },
    '/phone/cancel': {
      post: {
        controller: 'PhoneController',
        method: 'cancel'
      }
    },
    '/phone/search': {
      post: {
        controller: 'PhoneController',
        method: 'search'
      }
    }
}
