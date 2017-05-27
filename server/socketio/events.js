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
    }

}
