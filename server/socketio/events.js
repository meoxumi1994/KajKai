export default {
    'server/CHANGE_STORE_POST': {
        controller: 'StorePostController',
        method: 'updateStorePost'
    },
    'server/ADD_MESSAGE': {
        controller: 'ChatController',
        method: 'addMessage'
    },
    'server/ADD_GROUPCOMMENTS': {
        controller: 'CommentController',
        method: 'addComment'
    },
    'server/ADD_COMMENTS': {
        controller: 'CommentController',
        method: 'addSubComment'
    },
    'server/GET_GROUPCOMMENTS': {
        controller: 'CommentController',
        method: 'getGroupComment'
    },
    'server/GET_COMMENTS': {
        controller: 'CommentController',
        method: 'getSubComment'
    }

}
