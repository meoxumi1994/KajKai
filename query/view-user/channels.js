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
  'LIKE.AddLike': {
    controller: 'LikeSubController',
    method: 'createLikeNotification'
  },
  'LIKE.RemoveLike': {
    controller: 'LikeSubController',
    method: 'removeLikeNotification'
  },
  'COMMENT.FirstLayerCommentCreated': {
    controller: 'CommentSubController',
    method: 'createCommentNotification'
  },
  'COMMENT.SecondLayerCommentCreated': {
    controller: 'ReplySubController',
    method: 'createReplyNotification'
  },
  'SELLPOST.Created': {
    controller: 'SellpostSubController',
    method: 'createSellpostCreatedNotification'
  },
  'SELLPOST.Updated': {
    controller: 'SellpostSubController',
    method: 'createSellpostUpdatedNotification'
  },
  'SELLPOST.Deleted': {
    controller: 'SellpostSubController',
    method: 'deleteSellpostNotification'
  },
}
