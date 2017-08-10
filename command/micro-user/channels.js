export default {
    'USER.AuthorizeToken': {
        controller: 'UserSubController',
        method: 'authorizeTokenSub'
    },
    'USER.GetUser': {
        controller: 'UserSubController',
        method: 'getUserSub'
    },
    'USER.GetListUser': {
        controller: 'UserSubController',
        method: 'getListUserSub'
    },
    'BAN.AddBan': {
        controller: 'UserSubController',
        method: 'addBanCon'
    },
    'BAN.RemoveBan': {
        controller: 'UserSubController',
        method: 'removeBanCon'
    },
    'BLACKLIST.Check': {
        controller: 'UserSubController',
        method: 'checkBlackList'
    }
}