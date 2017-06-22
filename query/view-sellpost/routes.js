import auth from './middlewares/auth'

export default {
  '/sellpost/:id': {
    get: {
        controller: 'SellpostController',
        middleware: [auth()],
        method: 'getSellpostHandler'
    }
  },
  '/sellpost/store/:id': {
    get: {
        controller: 'SellpostController',
        middleware: [auth()],
        method: 'getSellpostsHandler'
    }
  },
  '/postrow/:sellpostid': {
    get: {
      controller: 'PostrowController',
      middleware: [auth()],
      method: 'getPostrowsHandler'
    }
  }
}
