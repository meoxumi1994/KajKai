import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const addNewFirstLayerCommentPub = (data, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {data: data, eventId: getUUID()};
    pub.publish('COMMENT.FirstLayerCommentAdded', JSON.stringify(publishData));
    sub.subcribe('COMMENT.FirstLayerCommentAdded' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubcribe();
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
    sub.subcribe('COMMENT.SecondLayerCommentAdded' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubcribe();
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
    sub.subcribe('SOCKET.COMMENT.GetFirstLayerComments' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubcribe();
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
    sub.subcribe('SOCKET.COMMENT.GetSecondLayerComments' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubcribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.comments)
        } else {
            next(null)
        }
    })
};/**
 * Created by creatnx on 6/28/17.
 */
