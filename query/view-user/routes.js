import auth from './middlewares/auth'

export default {
  '/user': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserHandler'
    }
  },
  '/user/:id': {
    get: {
        controller: 'UserController',
        middleware: [auth()],
        method: 'getUserHandler'
    },
  },
  '/privacy/user': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserPrivacyHandler'
    }
  },
  '/privacy/user/:id': {
    get: {
      controller: 'UserController',
      middleware: [auth()],
      method: 'getUserPrivacyHandler'
    }
  },
  '/test': {
    post: {
      controller: 'TestController',
      method: 'insertHandler'
    },
    put: {
      controller: 'TestController',
      method: 'updateHandler'
    }
  }
}
