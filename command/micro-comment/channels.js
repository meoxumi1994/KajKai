export default {
    'COMMENT.FirstLayerCommentAdded': {
        controller: 'CommentSubController',
        method: 'addFirstLayerCommentSub'
    },
    'COMMENT.SecondLayerCommentAdded': {
        controller: 'CommentSubController',
        method: 'addSecondLayerCommentSub'
    },
    'COMMENT.GetSellPostId': {
        controller: 'CommentSubController',
        method: 'getSellPostIdFromComment'
    },
    'COMMENT.OrderCommentUpdated': {
        controller: 'CommentSubController',
        method: 'updateFirstLayerComment'
    }
}