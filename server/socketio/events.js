export default {
    'DEMO_EVENT': {
        controller: 'CommentController',
        method: 'handleSioDemo'
    },
    'message': {
        controller: 'CommentController',
        method: 'textSockIO'
    },
    'nhantin': {
        controller: 'CommentController',
        method: 'transerMessage'
    },
    'subcribeRoom': {
        controller: 'CommentController',
        method: 'subcribe'
    },
    'unSubcribeRoom': {
        controller: 'CommentController',
        method: 'unsubcribe'
    },
    'commentMessage': {
        controller: 'CommentController',
        method: 'comment'
    },
    'server/hello': {
        controller: 'CommentController',
        method: 'testToken'
    },
    'server/CHANGE_STOREMAINPOST': {
        controller: 'StorePostController',
        method: 'updateStoreMainPost'
    },
    'server/JOIN_STOREMAINPOST': {
        controller: 'StorePostController',
        method: 'joinMainPost'
    },
    'server/LEAVE_STOREMAINPOST': {
        controller: 'StorePostController',
        method: 'leaveMainPost'
    },
    'server/JOIN_CHAT': {
        controller: 'ChatController',
        method: 'joinChat'
    },
    'server/LEAVE_CHAT': {
        controller: 'ChatController',
        method: 'leaveChat'
    },
    'server/ADD_MESSAGE': {
        controller: 'ChatController',
        method: 'addMessage'
    },
    'server/JOIN_GROUPCOMMENTS': {
        controller: 'CommentController',
        method: 'joinGroupComment'
    },
    'server/LEAVE_GROUPCOMMENTS': {
        controller: 'CommentController',
        method: 'leaveGroupComment'
    },
    'server/ADD_GROUPCOMMENTS': {
        controller: 'CommentController',
        method: 'addComment'
    },
    'server/JOIN_COMMENTS': {
        controller: 'CommentController',
        method: 'joinComment'
    },
    'server/LEAVE_COMMENTS': {
        controller: 'CommentController',
        method: 'leaveComment'
    },
    'server/ADD_COMMENTS': {
        controller: 'CommentController',
        method: 'addSubComment'
    }
}
