export default {
  'CHAT.Created': {
    controller: 'ChatSubController',
    method: 'createChat'
  },
  'CHAT.Updated': {
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
  }
}
