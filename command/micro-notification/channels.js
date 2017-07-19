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
    'LIKE.AddLike': {
        controller: 'NotificationSubController',
        method: 'addLikeCon'
    },
    'LIKE.RemoveLike': {
        controller: 'NotificationSubController',
        method: 'removeLikeCon'
    }
}