export default {
    'server/JOIN_POST': {
        controller: 'CommentController',
        method: 'joinPostCon'
    },
    'server/JOIN_LEADERCOMMENT': {
        controller: 'CommentController',
        method: 'joinFirstLayerCommentCon'
    },
    'server/LEAVE_POST': {
        controller: 'CommentController',
        method: 'leavePostCon'
    },
    'server/COMMENT': {
        controller: 'CommentController',
        method: 'addNewSecondLayerCommentCon'
    },
    'server/GET_MORE_COMMENT': {
        controller: 'CommentController',
        method: 'getSecondLayerCommentCon'
    },
    'server/COMMENT_ING': {
        controller: 'CommentController',
        method: 'currentSecondLayerCommentCon'
    },
    'server/LEADERCOMMENT': {
        controller: 'CommentController',
        method: 'addNewFirstLayerCommentCon'
    },
    'server/GET_MORE_LEADERCOMMENT': {
        controller: 'CommentController',
        method: 'getFirstLayerCommentCon'
    },
    'server/LEADERCOMMENT_ING': {
        controller: 'CommentController',
        method: 'currentFirstLayerCommentCon'
    },
    // 'server/'
}
