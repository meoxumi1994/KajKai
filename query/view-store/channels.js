export default {
  'STORE.Created': {
    controller: 'StoreSubController',
    method: 'createStore'
  },
  'STORE.Updated': {
    controller: 'StoreSubController',
    method: 'updateStore'
  },
  'USER.Created': {
    controller: 'UserSubController',
    method: 'createBasicUser'
  },
  'USER.Updated': {
    controller: 'UserSubController',
    method: 'updateBasicUser'
  }
}
