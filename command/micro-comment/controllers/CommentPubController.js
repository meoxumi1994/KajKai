import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

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

export const getStoreFromPostId = (postId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {postId: postId, eventId: id};
    pub.publish('STORE.GetStoreFromPost', JSON.stringify(publicData));
    sub.subscribe('STORE.GetStoreFromPost' + id);
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

export const newFirstLayerCommentCreated = (fCommentInfo) => {
    const pub = redis.createClient(config);
    pub.publish('COMMENT.FirstLayerCommentCreated', JSON.stringify({fComment: fCommentInfo}));
    pub.quit();
};

export const newSecondLayerCommentCreated = (sCommentInfo) => {
    const pub = redis.createClient(config);
    pub.publish('COMMENT.SecondLayerCommentCreated', JSON.stringify({sComment: sCommentInfo}));
    pub.quit();
};

