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

export const createStorePub = (store) => {
    const pub = redis.createClient(config);
    const publishData = {store: store};
    pub.publish('STORE.Created', JSON.stringify(publishData));
    pub.quit();
};

export const updateStorePub = (store) => {
    const pub = redis.createClient(config);
    const publishData = {store: store};
    pub.publish('STORE.Updated', JSON.stringify(publishData));
    pub.quit();
};

export const sellPostUpdated = (sellPost) => {
    const pub = redis.createClient(config);
    const publishData = {sellpost: sellPost};
    pub.publish('SELLPOST.Updated', JSON.stringify(publishData));
    pub.quit();
};

export const sellPostCreated = (sellPost) => {
    const pub = redis.createClient(config);
    const publishData = {sellpost: sellPost};
    console.log('publishData ' + JSON.stringify(publishData));
    pub.publish('SELLPOST.Created', JSON.stringify(publishData));
    pub.quit();
};

export const sellPostDeleted = (storeId, sellPostId) => {
    const pub = redis.createClient(config);
    const publishData = {sellpost:
        {storeId: storeId, sellPostId: sellPostId}};
    pub.publish('SELLPOST.Deleted', JSON.stringify(publishData));
    pub.quit();
};

export const postRowCreatedPub = (postRow) => {
    const pub = redis.createClient(config);
    const publishData = {postRow: postRow};
    pub.publish('POSTROW.Created', JSON.stringify(publishData));
    pub.quit();
};

export const postRowUpdatedPub = (postRow) => {
    const pub = redis.createClient(config);
    const publishData = {postRow: postRow};
    pub.publish('POSTROW.Updated', JSON.stringify(publishData));
    pub.quit();
};

export const postRowDeletedPub = (postRowId, sellPostId) => {
    const pub = redis.createClient(config);
    const publishData = {postRow: {
        postrowId: postRowId,
        sellPostId: sellPostId
    }};
    pub.publish('POSTROW.Deleted', JSON.stringify(publishData));
    pub.quit();
};

export const productCreatedPub = (product) => {
    const pub = redis.createClient(config);
    const publishData = {product: product};
    pub.publish('POSTROW.PRODUCT.Created', JSON.stringify(publishData));
    pub.quit();
};

export const productUpdatedPub = (product) => {
    const pub = redis.createClient(config);
    const publishData = {product: product};
    pub.publish('POSTROW.PRODUCT.Updated', JSON.stringify(publishData));
    pub.quit();
};

export const productDeletedPub = (sellPostId, postrowsId, productId) => {
    const pub = redis.createClient(config);
    const publishData = {product: {
        sellPostId: sellPostId,
        postrowsId: postrowsId,
        productId: productId
    }};
    pub.publish('POSTROW.PRODUCT.Updated', JSON.stringify(publishData));
    pub.quit();
};