export default {
    // post and comment
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
    // chat
    'server/RESET_UNREAD_CHATS_QUANTITY': {
        controller: 'ChatController',
        method: 'resetChatCountCon'
    },
    'server/READ_CHAT': {
        controller: 'ChatController',
        method: 'readChatCon'
    },
    'server/SEND_MESSAGE': {
        controller: 'ChatController',
        method: 'addNewMessageCon'
    },
    'server/ADD_MEMBER': {
        controller: 'ChatController',
        method: 'addMemberCon'
    },
    'server/REMOVE_MEMBER': {
        controller: 'ChatController',
        method: 'removeMemberCon'
    },
    'server/UPDATE_UI': {
        controller: 'ChatController',
        method: 'updateUICon'
    },
    // like
    'server/LIKE': {
        controller: 'LikeController',
        method: 'likeAct'
    },
    'server/UNLIKE': {
        controller: 'LikeController',
        method: 'unlikeAct'
    }
}
