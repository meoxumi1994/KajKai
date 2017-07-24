export default {
  'USER.Created': {
    controller: 'UserSubController',
    method: 'createUser'
  },
  'USER.Updated': {
    controller: 'UserSubController',
    method: 'updateUser'
  },
  'STORE.Created': {
    controller: 'StoreSubController',
    method: 'addStore'
  },
  'STORE.Updated': {
    controller: 'StoreSubController',
    method: 'updateStoreList'
  }
}
