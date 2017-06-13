import redis from 'redis'
import config from './config'
import { getUUID } from '../utils/utils'

const auth = () => {
    return (req, res, next) => {
        const sub = redis.createClient(config)
        const pub = redis.createClient(config)

        const token = req.cookies.token
        console.log('token: ' + token)
        if (!token) {
            res.json({ authorization: "FAILED" })
        } else {
            const publishData = {token: token, id: getUUID()}
            pub.publish('USER.AuthorizeToken', JSON.stringify(publishData))
            sub.subcribe('STORE.AuthorizeToken' + publishData.id)
            sub.on('message', (channel, message) => {
                message = JSON.parse(message)
                sub.unsubcribe()
                sub.quit()
                pub.quit()
                if (message.status === 'success') {
                    req.user = message.user
                    next()
                } else {
                    res.json({ authorization: "FAILED" })
                }
            })
        }
    }
}

export default auth
