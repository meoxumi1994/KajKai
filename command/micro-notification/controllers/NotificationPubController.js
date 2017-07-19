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