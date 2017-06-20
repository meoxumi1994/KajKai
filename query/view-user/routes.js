import auth from './middlewares/auth'

export default {
    '/user/:id': {
      get: {
          controller: 'UserController',
          middleware: [auth()],
          method: 'getUserHandler'
      },
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
