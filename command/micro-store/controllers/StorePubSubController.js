import redis from 'redis'
import config from './config'
import { getUUID } from '../utils/utils'

export const getUser = (userId, next) => {
    const sub = redis.createClient(config)
    const pub = redis.createClient(config)
    const id = getUUID()
    const publicData = {userId: userId, id: id}
    pub.publish('USER.GetUser', JSON.stringify(publicData))
    sub.subscribe('STORE.GetUser' + id)
    sub.on('message', (channel, message) => {
        message = JSON.parse(message)
        if (message.status === 'success') {
            next(message.user)
        } else {
            next(null)
        }
    })
}