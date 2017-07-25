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
  },
  'FOLLOW.AddFollow': {
    controller: 'FollowSubController',
    method: 'addFollow'
  },
  'FOLLOW.RemoveFollow': {
    controller: 'FollowSubController',
    method: 'removeFollow'
  },  
  'BAN.AddBan': {
    controller: 'BanSubController',
    method: 'addBan'
  },
  'BAN.RemoveBan': {
    controller: 'BanSubController',
    method: 'removeBan'
  }
}
