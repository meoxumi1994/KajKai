import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'


export const addNewMessagePub = (mesInfo, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {mesInfo: mesInfo, eventId: id};
    pub.publish('CHAT.MessageCreated', JSON.stringify(publicData));
    sub.subscribe('CHAT.MessageCreated' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        console.log('pub ' + JSON.stringify(message));
        if (message.status === 'success') {
            next(message.mes, message.emitList);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const getUnreadMessagePub = (userId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, eventId: id};
    pub.publish('CHAT.GetUnreadChat', JSON.stringify(publicData));
    sub.subscribe('CHAT.GetUnreadChat' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.unread);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const resetChatCountPub = (userId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, eventId: id};
    pub.publish('CHAT.ResetUnreadCounter', JSON.stringify(publicData));
    sub.subscribe('CHAT.ResetUnreadCounter' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(true);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const readChatPub = (userId, mesId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, mesId: mesId, eventId: id};
    pub.publish('CHAT.MessageReadUpdated', JSON.stringify(publicData));
    sub.subscribe('CHAT.MessageReadUpdated' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.mesId);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const addMemberPub = (mesId, members, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {members: members, mesId: mesId, eventId: id};
    pub.publish('CHAT.GroupMemberAdded', JSON.stringify(publicData));
    sub.subscribe('CHAT.GroupMemberAdded' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.data, message.receiverId);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const removeMemberPub = (mesId, memberId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {memberId: memberId, mesId: mesId, eventId: id};
    pub.publish('CHAT.GroupMemberAdded', JSON.stringify(publicData));
    sub.subscribe('CHAT.GroupMemberAdded' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.data, message.receiverId);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};

export const updateUIPub = (mesId, data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {data: data, mesId: mesId, eventId: id};
    pub.publish('CHAT.GroupUIUpdated', JSON.stringify(publicData));
    sub.subscribe('CHAT.GroupUIUpdated' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.data, message.receiverId);
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    })
};