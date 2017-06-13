import config from '../config/pubSubConfig'
import redis from 'redis'
import { getUserFromToken, getUserBasicStoreInfo } from '../services/UserService'

const sub = redis.createClient(config)
const pub = redis.createClient(config)

sub.on('message', (channel, message) => {
    console.log(channel, JSON.parse(message))
    message = JSON.parse(message)
    if(channel === 'USER.AuthorizeToken') {
        getUserFromToken(message.token, (user) => {
            var response
            if (user) response = {status: 'success', user: getUserBasicStoreInfo(user)}
            else response = {status: 'failed'}
            pub.publish('STORE.AuthorizeToken' + message.id, JSON.stringify(response))
        })
    }
})



sub.subscribe('USER.AuthorizeToken')
sub.subscribe('USER.GetUser')