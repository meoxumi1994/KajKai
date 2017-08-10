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
    const publishData = {user: getUserBasicInfo(user)};
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

export const addBlackListPub = (block) => {
    const pub = redis.createClient(config);
    const publicData = {blackList: block};
    pub.publish('BLACKLIST.Add', JSON.stringify(publicData));
    pub.quit();
};

export const removeBlackListPub = (block) => {
    const pub = redis.createClient(config);
    const publicData = {blackList: block};
    pub.publish('BLACKLIST.Remove', JSON.stringify(publicData));
    pub.quit();
};