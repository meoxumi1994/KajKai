export default {
    'NOTI.GetListFollower': {
        controller: 'NotificationSubController',
        method: 'getListFollowerCon'
    },
    'NOTI.GetListFollowee': {
        controller: 'NotificationSubController',
        method: 'getListFolloweeCon'
    },
    'NOTI.AddNewFollow': {
        controller: 'NotificationSubController',
        method: 'addNewFollowCon'
    },
    'NOTI.RemoveFollow': {
        controller: 'NotificationSubController',
        method: 'removeFollowCon'
    },
    'NOTI.UpdateFollow': {
        controller: 'NotificationSubController',
        method: 'updateFollowCon'
    },
    'NOTI.LIKE.AddLike': {
        controller: 'NotificationSubController',
        method: 'addLikeCon'
    },
    'STORE.Created': {
        controller: 'NotificationSubController',
        method: 'notifyInterestSub'
    },
    'NOTI.UpdateUserFollow': {
        controller: 'NotificationSubController',
        method: 'updateUserFollowCon'
    }
}