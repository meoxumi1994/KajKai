import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const addNewFirstLayerCommentPub = (data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {data: data, eventId: getUUID()};
    pub.publish('COMMENT.FirstLayerCommentAdded', JSON.stringify(publishData));
    sub.subscribe('COMMENT.FirstLayerCommentAdded' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.firstLayerComment)
        } else {
            next(null)
        }
    })
};

export const addNewSecondLayerCommentPub = (data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {data: data, eventId: getUUID()};
    pub.publish('COMMENT.SecondLayerCommentAdded', JSON.stringify(publishData));
    sub.subscribe('COMMENT.SecondLayerCommentAdded' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.secondLayerComment)
        } else {
            next(null)
        }
    })
};

export const getMoreFirstLayerComments = (data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {data: data, eventId: getUUID()};
    pub.publish('SOCKET.COMMENT.GetFirstLayerComments', JSON.stringify(publishData));
    sub.subscribe('SOCKET.COMMENT.GetFirstLayerComments' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.comments)
        } else {
            next(null)
        }
    })
};

export const getMoreSecondLayerComments = (data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {data: data, eventId: getUUID()};
    pub.publish('SOCKET.COMMENT.GetSecondLayerComments', JSON.stringify(publishData));
    sub.subscribe('SOCKET.COMMENT.GetSecondLayerComments' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.comments)
        } else {
            next(null)
        }
    })
};

export const addNewFollow = (followerId, followeeId) => {
    const pub = redis.createClient(config);
    const publishData = {followerId, followeeId};
    console.log('new follow ' + JSON.stringify(publishData));
    pub.publish('NOTI.AddNewFollow', JSON.stringify(publishData));
    pub.quit();
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