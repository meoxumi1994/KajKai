import auth from './common/middlewares/auth'
import phoneCheck from './common/middlewares/phoneChecking'

export default {

  '/register': {
    post: {
      controller: 'UserController',
      method: 'registerNewUser'
    }
  },

  // '/verify': {
  //   post: {
  //     controller: 'UserController',
  //     method: 'sendVerifyEmail'
  //   }
  // },

  '/emailverification/:token': {
    get: {
      controller: 'EmailController',
      method: 'comfirmEmailVerification'
    }
  },

  '/updatephone': {
    put: {
      controller: 'PhoneController',
      middleware: [auth(), phoneCheck()],
      method: 'updateUserPhone'
    }
  },

  '/updatepassword': {
    put:{
      controller: 'UserController',
      middleware: [auth()],
      method: 'updateUserPassword'
    }
  },

  '/verifyphone': {
    put: {
      controller: 'PhoneController',
      middleware: [auth(), phoneCheck()],
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
      controller: 'UserController',
      method: 'authorizeUser'
    }
  },

  '/logout': {
    get: {
      controller: 'UserController',
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

  // '/findLoginID': {
  //   post: {
  //     controller: 'UserController',
  //     method: 'findLoginID'
  //   }
  // },

  '/who': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUser'
    }
  },

  '/loginfacebook': {
    post: {
      controller: 'UserController',
      method: 'getFacebookUser'
    }
  },

  '/logingoogle': {
    post: {
      controller: 'UserController',
      method: 'getGoogleUser'
    }
  },

  '/getcategorylist': {
    get: {
      controller: 'CategoryController',
      method: 'getCategory'
    }
  }


}
