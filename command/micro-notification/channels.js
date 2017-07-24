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
    'NOTI.LIKE.RemoveLike': {
        controller: 'NotificationSubController',
        method: 'removeLikeCon'
    }
}