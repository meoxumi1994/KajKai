import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const getOwnerFromPostId = (postId, next) => {
    const sub = redis.createClient(config);
    const pub = redis.createClient(config);
    const id = getUUID();
    const publicData = {postId: postId, eventId: id};
    pub.publish('STORE.GetStoreFromPost', JSON.stringify(publicData));
    sub.subscribe('STORE.GetStoreFromPost' + id);
    sub.on('message', (channel, message) => {
        message = JSON.parse(message);
        if (message.status === 'success') {
            next(message.store.owner)
        } else {
            next(null)
        }
        sub.unsubscribe();
        sub.quit();
        pub.quit()
    })
};
