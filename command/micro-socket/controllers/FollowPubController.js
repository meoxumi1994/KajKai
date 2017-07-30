import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const updateUserFollowPub = (userId, storeId, sellPostId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {userId, storeId, sellPostId, eventId: getUUID()};
    console.log(JSON.stringify(publishData));
    pub.publish('NOTI.UpdateFollow', JSON.stringify(publishData));
    sub.subscribe('NOTI.UpdateFollow' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.userFollow)
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

export const getListFollower = (followeeId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {followeeId: followeeId, eventId: getUUID()};
    pub.publish('NOTI.GetListFollower', JSON.stringify(publishData));
    sub.subscribe('NOTI.GetListFollower' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.followerList)
        } else {
            next(null)
        }
    })
};