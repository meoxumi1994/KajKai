import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const addLikePub = (likerId, sellPostId, fCommentId, sCommentId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {likerId, sellPostId, fCommentId, sCommentId, eventId: getUUID()};
    pub.publish('NOTI.LIKE.AddLike', JSON.stringify(publishData));
    sub.subscribe('NOTI.LIKE.AddLike' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(message.like)
        } else {
            next(null)
        }
    })
};

// export const removeLikePub = (likerId, likenId, next) => {
//     const sub = redis.createClient(config);
//     const pub = redis.createClient(config);
//     const publishData = {likerId, likenId, eventId: getUUID()};
//     pub.publish('NOTI.LIKE.RemoveLike', JSON.stringify(publishData));
//     sub.subscribe('NOTI.LIKE.RemoveLike' + publishData.eventId);
//     sub.on('message', (channel, message) => {
//         message = JSON.parse(message);
//         sub.unsubscribe();
//         sub.quit();
//         pub.quit();
//         if (message.status === 'success') {
//             next(message.like)
//         } else {
//             next(null)
//         }
//     })
// };