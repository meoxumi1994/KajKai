export default {
  'CHATGROUP.Created': {
    controller: 'ChatSubController',
    method: 'createChat'
  },
  'CHATGROUP.Updated': {
    controller: 'ChatSubController',
    method: 'updateChat'
  },
  'MESSAGE.Created': {
    controller: 'MessageSubController',
    method: 'createMessage'
  },
  'USER.Created': {
    controller: 'UserSubController',
    method: 'createBasicUser'
  },
  'USER.Updated': {
    controller: 'UserSubController',
    method: 'updateBasicUser'
  },
  'STORE.Created': {
    controller: 'StoreSubController',
    method: 'createStore'
  },
  'STORE.Updated': {
    controller: 'StoreSubController',
    method: 'updateStore'
  }
}
