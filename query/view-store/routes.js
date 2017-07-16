import auth from './middlewares/auth'

export default {
  '/store/:id': {
    get: {
      controller: 'StoreController',
      middleware: [auth()],
      method: 'getStoreHandler'
    }
  },
  '/store': {
    get: {
      controller: 'StoreController',
      middleware: [auth()],
      method: 'getStoresHandler'
    }
  }
}
