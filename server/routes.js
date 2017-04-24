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

  '/checkemail': {
    post: {
      controller: 'UserController',
      method: 'checkEmailExist'
    }
  },

  '/checkphone': {
    post: {
      controller: 'UserController',
      method: 'checkPhoneExist'
    }
  }
}
