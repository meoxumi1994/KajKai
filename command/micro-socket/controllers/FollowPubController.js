import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const updateFollowPub = (userId, storeId, sellPostId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {userId, storeId, sellPostId, eventId: getUUID()};
    pub.publish('NOTI.UpdateFollow', JSON.stringify(publishData));
    sub.subscribe('NOTI.UpdateFollow' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.follow)
        } else {
            next(null)
        }
    })
};

export const getFollowListPub = (userId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {followerId: userId, eventId: getUUID()};
    pub.publish('NOTI.GetListFollowee', JSON.stringify(publishData));
    sub.subscribe('NOTI.GetListFollowee' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.followeeList)
        } else {
            next(null)
        }
    })
};
