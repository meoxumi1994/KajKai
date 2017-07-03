import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'
import globalId from '../config/globalId'

const USER_GLOBAL_ID = globalId.USER_GLOBAL_ID;

export const getUser = (userId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, eventId: id};
    pub.publish('USER.GetUser', JSON.stringify(publicData));
    sub.subscribe('USER.GetUser' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.user)
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const getStore = (storeId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, eventId: id};
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

export const getListUser = (userIdList, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userIdList: userIdList, eventId: id};
    pub.publish('USER.GetListUser', JSON.stringify(publicData));
    sub.subscribe('USER.GetListUser' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.users)
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const getListStore = (storeIdList, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userIdList: storeIdList, eventId: id};
    pub.publish('STORE.GetListStore', JSON.stringify(publicData));
    sub.subscribe('STORE.GetListStore' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.stores)
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const getInfoFromListId = (idList, next) => {
    var userIdList = [];
    var storeIdList = [];
    for (var i = 0; i < idList.length; ++i) {
        if (idList[i].startsWith(USER_GLOBAL_ID)) {
            userIdList.push(idList[i]);
        } else {
            storeIdList.push(idList[i]);
        }
    }
    if (storeIdList.length === 0) {
        getListUser(userIdList, (users) => {
            next(users);
        })
    } else {
        getListStore(storeIdList, (stores) => {
            getUser(userIdList, (users) => {
                stores.push(users);
                next(stores);
            })
        })
    }
};

export const chatGroupCreatedPub = (group) => {
    const pub = redis.createClient(config);
    pub.publish('CHATGROUP.Created', JSON.stringify({chatGroup: group}));
    pub.quit();
};

export const chatGroupUpdatedPub = (group) => {
    const pub = redis.createClient(config);
    pub.publish('CHATGROUP.Updated', JSON.stringify({chatGroup: group}));
    pub.quit();
};

export const messageCreatedPub = (message, receiverIds) => {
    const pub = redis.createClient(config);
    pub.publish('MESSAGE.Created', JSON.stringify({message: message, receiverIds: receiverIds}));
    pub.quit();
};

export const messageReadPub = (userID, groupId) => {
    const pub = redis.createClient(config);
    pub.publish('MESSAGE.Created', JSON.stringify({userID: userID, groupId: groupId}));
    pub.quit();
};