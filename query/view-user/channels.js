export default {
  'USER.Created': {
    controller: 'UserSubController',
    method: 'createUser'
  },
  'USER.Updated': {
    controller: 'UserSubController',
    method: 'updateUser'
  },
  'USER.BlackListUpdated': {
    controller: 'UserSubController',
    method: 'updateBlackList'
  },
  'STORE.Created': {
    controller: 'StoreSubController',
    method: 'addStore'
  },
  'STORE.Updated': {
    controller: 'StoreSubController',
    method: 'updateStoreList'
  },
  'BAN.AddBan': {
    controller: 'BanSubController',
    method: 'addBan'
  },
  'BAN.RemoveBan': {
    controller: 'BanSubController',
    method: 'removeBan'
  },
  'FOLLOW.AddFollow': {
    controller: 'FollowSubController',
    method: 'addFollow'
  },
  'FOLLOW.RemoveFollow': {
    controller: 'FollowSubController',
    method: 'removeFollow'
  },  
}
