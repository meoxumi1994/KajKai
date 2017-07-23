export default {
    'NOTI.GetListFollower': {
        controller: 'NotificationSubController',
        method: 'getListFollowerCon'
    },
    'NOTI.AddNewFollow': {
        controller: 'NotificationSubController',
        method: 'addNewFollowCon'
    },
    'NOTI.RemoveFollow': {
        controller: 'NotificationSubController',
        method: 'removeFollowCon'
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