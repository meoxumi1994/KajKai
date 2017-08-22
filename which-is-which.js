const post = {
    getway: 'https://g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai/',
    kajkai_1: {
        service: {
            comment: '54.254.219.177:8082',
            socket: '54.254.219.177:8084'
        }
    },
    kajkai_2: {
        service: {
            user: '54.255.192.30:8080',
        }
    },
    kajkai_3: {
        service:{
            notification: '54.169.67.200:8086',
            search: '54.169.67.200:8085',
            store: '54.169.67.200:8081'
        }
    },
    kajkai_4: {
        ip: '',
        service: {
            chat: '13.229.57.22:8083',
            event: '13.229.57.22'
        }
    }
};

const shit = {
    comment: 1,
    socket: 1,
    user: 2,
    notification: 3,
    search: 3,
    store: 3,
    chat: 4,
    event: 4
};

sphere = db.getCollection('interests').createIndex( { 'location' : "2dsphere" } );
db.getCollection('interests').createIndex( { "name" : 1 } )