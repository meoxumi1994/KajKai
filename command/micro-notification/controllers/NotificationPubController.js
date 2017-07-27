import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const authoriseToken = (token, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {token: token, eventId: getUUID()};
    pub.publish('USER.AuthorizeToken', JSON.stringify(publishData));
    sub.subscribe('USER.AuthorizeToken' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.user)
        } else {
            next(null)
        }
    })
};

export const addlikePub = (likeInfo) => {
    const pub = redis.createClient(config);
    const publishData = {like: likeInfo};
    pub.publish('LIKE.AddLike', JSON.stringify(publishData));
    pub.quit();
};

export const removeLikePub = (likeInfo) => {
    const pub = redis.createClient(config);
    const publishData = {like: likeInfo};
    pub.publish('LIKE.RemoveLike', JSON.stringify(publishData));
    pub.quit();
};

export const getSellPostId = (fCommentId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {fCommentId: fCommentId, eventId: getUUID()};
    pub.publish('COMMENT.GetSellPostId', JSON.stringify(publishData));
    sub.subscribe('COMMENT.GetSellPostId' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.sellPostId)
        } else {
            next(null)
        }
    })
};

export const addFollowPub = (followInfo) => {
    const pub = redis.createClient(config);
    const publishData = {follow: followInfo};
    pub.publish('FOLLOW.AddFollow', JSON.stringify(publishData));
    pub.quit();
};

export const removeFollowPub = (followInfo) => {
    const pub = redis.createClient(config);
    const publishData = {follow: followInfo};
    pub.publish('FOLLOW.RemoveFollow', JSON.stringify(publishData));
    pub.quit();
};

export const addInterestPub = (interest) => {
    const pub = redis.createClient(config);
    const publishData = {interest: interest};
    pub.publish('INTEREST.AddInterest', JSON.stringify(publishData));
    pub.quit();
};

export const removeInterestPub = (interest) => {
    const pub = redis.createClient(config);
    const publishData = {interest: interest};
    pub.publish('INTEREST.AddInterest', JSON.stringify(publishData));
    pub.quit();
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

export const newStoreInterestPub = (storeId, storeName, avatarUrl, urlName, listUserId) => {
    const pub = redis.createClient(config);
    const publishData = {interest: {
        store: {
            storeId,
            storeName,
            avatarUrl,
            urlName
        },
        listUserId: listUserId
    }};
    pub.publish('INTEREST.NotifyNewStoreCreated', JSON.stringify(publishData));
    pub.quit();
};