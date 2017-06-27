export default {
    // 'COMMENT.FirstLayerCommentAdded': {
    //     controller: 'CommentSubController',
    //     method: 'addFirstLayerCommentSub'
    // },
    // 'COMMENT.SecondLayerCommentAdded': {
    //     controller: 'CommentSubController',
    //     method: 'addSecondLayerCommentSub'
    // },
    'CHAT.MessageCreated': {
        controller: 'ChatSubController',
        method: 'addNewMessageSub'
    },
    'CHAT.JoinMember': {
        controller: 'ChatSubController',
        method: 'joinMemberSub'
    },
    'CHAT.GroupMemberUpdated': {
        controller: '',
        method: ''
    },
    'CHAT.GroupUIUpdated': {
        controller: 'ChatSubController',
        method: 'updateGroupUISub'
    },
    'CHAT.MessageReadUpdated': {
        controller: '',
        method: ''
    },
    'CHAT.GetUnReadChat': {
        controller: '',
        method: ''
    }
}