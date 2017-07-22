export default {
    '/search/user': {
        get: {
            controller: 'SearchController',
            method: 'searchUserCon'
        }
    },
    '/search/store': {
        get: {
            controller: 'SearchController',
            method: 'searchStoreCon'
        }
    },
    '/deleteindex': {
        get: {
            controller: 'SearchController',
            method: 'deleteIndexCon'
        }
    },
    '/search/category': {
        get: {
            controller: 'SearchController',
            method: 'searchSellPostCon'
        }
    }
}
