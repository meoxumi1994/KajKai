export default {
    'CHAT.MessageCreated': {
        controller: 'ChatSubController',
        method: 'addNewMessageSub'
    },
    'CHAT.JoinMember': {
        controller: 'ChatSubController',
        method: 'joinMemberSub'
    },
    'CHAT.GroupMemberAdded': {
        controller: 'ChatSubController',
        method: 'memberAddedToGroup'
    },
    'CHAT.GroupMemberRemoved': {
        controller: 'ChatSubController',
        method: 'memberRemovedFromGroup'
    },
    'CHAT.GroupUIUpdated': {
        controller: 'ChatSubController',
        method: 'updateGroupUISub'
    },
    'CHAT.MessageReadUpdated': {
        controller: 'ChatSubController',
        method: 'messageRead'
    },
    'CHAT.GetUnreadChat': {
        controller: 'ChatSubController',
        method: 'getUnreadChatSub'
    },
    'CHAT.ResetUnreadCounter': {
        controller: 'ChatSubController',
        method: 'resetUnreadCounterSub'
    }
}