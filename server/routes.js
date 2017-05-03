import auth from './common/middlewares/auth'

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

  // '/emailverification/:token': {
  //   get: {
  //     controller: 'UserController',
  //     method: 'comfirmEmailVerification'
  //   }
  // },

  '/updatephone': {
    post: {
      controller: 'PhoneController',
      middleware: [auth()],
      method: 'updateUserPhone'
    }
  },

  '/verifyphone': {
    post: {
      controller: 'PhoneController',
      middleware: [auth()],
      method: 'verifyPhone'
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

  '/updatephone': {
    put: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'changeUserPhone'
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
  }


}
