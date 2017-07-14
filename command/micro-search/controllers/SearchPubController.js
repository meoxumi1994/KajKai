import redis from 'redis'
import { getUUID } from '../utils/utils'
import config from '../config/pubSubConfig'

export const getStore = (storeId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {userId: userId, eventId: id};
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