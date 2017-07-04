import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUserBasicInfo } from '../services/UserService'
import { getUUID } from '../utils/utils'
import globalId from '../config/globalId'

export const createUserPub = (user) => {
    const pub = redis.createClient(config);
    const publicData = {user: getUserBasicInfo(user)};
    console.log('fuck User Created ' + JSON.stringify(publicData));
    pub.publish('USER.Created', JSON.stringify(publicData));
    pub.quit();
};

export const updateUserPub = (user) => {
    const pub = redis.createClient(config);
    const publishData = ({user: getUserBasicInfo(user)});
    pub.publish('USER.Updated', JSON.stringify(publishData));
    pub.quit();
};

export const getStore = (storeId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {storeId: storeId, eventId: id};
    pub.publish('STORE.GetStore', JSON.stringify(publicData));
    sub.subscribe('STORE.GetStore' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.store)
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit()
    })
};

export const updateBlackList = (userId, blockId, status) => {
    const pub = redis.createClient(config);
    var type = 'userid';
    switch (blockId){
        case blockId.startsWith(globalId.USER_GLOBAL_ID):
            type = 'userid';
            break;
        case blockId.startsWith(globalId.STORE_GLOBAL_ID):
            type = 'storeid';
            break;
        case blockId.startsWith(globalId.MESSAGE_GLOBAL_ID):
            type = 'mesid';
            break;
    }
    const publishData = {user: {userId: userId, blockId: blockId, status: status, type: type}};
    pub.publish('USER.BlackListUpdated', JSON.stringify(publishData));
    pub.quit();
};