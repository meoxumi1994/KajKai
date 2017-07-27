export default {
    'STORE.Created': {
        controller: 'SocketSubController',
        method: 'notifyInterestSub'
    },
    'NOTIFICATION': {
        controller: 'SocketSubController',
        method: 'getNotification'
    }
}