export default {
  'STORE.Created': {
    controller: 'StoreSubController',
    method: 'createStore'
  },
  'STORE.Updated': {
    controller: 'StoreSubController',
    method: 'updateStore'
  },
  'SELLPOST.Created': {
    controller: 'SellpostSubController',
    method: 'createSellpost'
  },
  'SELLPOST.Updated': {
    controller: 'SellpostSubController',
    method: 'updateSellpost'
  },
  'SELLPOST.Deleted': {
    controller: 'SellpostSubController',
    method: 'deleteSellpost'
  },
  'POSTROW.Created': {
    controller: 'PostrowSubController',
    method: 'createPostrow'
  },
  'POSTROW.Updated': {
    controller: 'PostrowSubController',
    method: 'updatePostrow'
  },
  'POSTROW.Deleted': {
    controller: 'PostrowSubController',
    method: 'deletePostrow'
  },
  'POSTROW.PRODUCT.Created': {
    controller: 'ProductSubController',
    method: 'createProduct'
  },
  'POSTROW.PRODUCT.Updated':{
    controller: 'ProductSubController',
    method: 'updateProduct'
  },
  'POSTROW.PRODUCT.Deleted': {
    controller: 'ProductSubController',
    method: 'deleteProduct'
  },
  'COMMENT.FirstLayerCommentCreated': {
    controller: 'CommentSubController',
    method: 'createComment'
  },
  'COMMENT.FirstLayerCommentUpdated': {
    controller: 'CommentSubController',
    method: 'updateComment'
  },
  'COMMENT.SecondLayerCommentCreated': {
    controller: 'ReplySubController',
    method: 'createReply'
  },
  'USER.Created': {
    controller: 'UserSubController',
    method: 'createBasicUser'
  },
  'USER.Updated': {
    controller: 'UserSubController',
    method: 'updateBasicUser'
  },
  'LIKE.AddLike': {
    controller: 'LikeSubController',
    method: 'addLike'
  },
  'LIKE.RemoveLike': {
    controller: 'LikeSubController',
    method: 'removeLike'
  },
  'FOLLOW.AddUserFollow': {
    controller: 'FollowSubController',
    method: 'addUserFollow'
  },
  'FOLLOW.RemoveUserFollow': {
    controller: 'FollowSubController',
    method: 'removeUserFollow'
  },
  'ODERMANAGEMENT': {
    controller: 'OrderManagementSubController',
    method: 'getCommentsInfoHandler'
  }
}
