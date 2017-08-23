import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const updateSellPostPub = (id, status, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const publishData = {sellpostid: id, status: status, eventId: getUUID()};
    pub.publish('SELLPOST.SockUpdate', JSON.stringify(publishData));
    sub.subscribe('SELLPOST.SockUpdate' + publishData.eventId);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        sub.unsubscribe();
        sub.quit();
        pub.quit();
        if (message.status === 'success') {
            next(true)
        } else {
            next(null)
        }
    })
};