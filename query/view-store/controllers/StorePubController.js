import redis from 'redis'
import config from '../config/pubSubConfig'
import { getUUID } from '../utils/utils'

export const getUser = (userId, next) => {
    const sub = redis.createClient(config)
    const pub = redis.createClient(config)
    const id = getUUID()
    const publicData = {userId: userId, eventId: id}
    pub.publish('USER.GetUser', JSON.stringify(publicData))
    sub.subscribe('STORE.GetUser' + id)
    sub.on('message', (channel, message) => {
        message = JSON.parse(message)
        if (message.status === 'success') {
            next(message.user)
        } else {
            next(null)
        }
        sub.unsubscribe()
        sub.quit()
        pub.quit()
    })
}

export const authoriseToken = (token, next) => {
    const sub = redis.createClient(config)
    const pub = redis.createClient(config)
    const publishData = {token: token, eventId: getUUID()}
    pub.publish('USER.AuthorizeToken', JSON.stringify(publishData))
    sub.subcribe('STORE.AuthorizeToken' + publishData.eventId)
    sub.on('message', (channel, message) => {
        message = JSON.parse(message)
        sub.unsubcribe()
        sub.quit()
        pub.quit()
        if (message.status === 'success') {
            next(message.user)
        } else {
            next(null)
        }
    })
}