import auth from './common/middlewares/auth'

export default {

  '/api': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'suckthisshit'
    }
  },
  
  '/register': {
    post: {
      controller: 'UserController',
      method: 'registerNewUser'
    }
  },

  '/verify': {
    post: {
      controller: 'UserController',
      method: 'sendVerifyEmail'
    }
  },

  '/emailverification/:token': {
    get: {
      controller: 'UserController',
      method: 'comfirmEmailVerification'
    }
  },

  '/findLoginID': {
    post: {
      controller: 'UserController',
      method: 'findLoginID'
    }
  },

  '/who': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUser'
    }
  }
}
