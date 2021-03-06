import redis from 'redis'
import config from './config/pubSubConfig'
import allChannels from './channels'

const sub = redis.createClient(config)
sub.setMaxListeners(Infinity)
const pub = redis.createClient(config)

// subscribe all channels
for(let mChannel in allChannels) {

    let handler = allChannels[mChannel]
    let method = require('./controllers/' + handler.controller)[handler.method]

    sub.on('message', (channel, message) => {
        if(channel === mChannel) {
            const eventMessage = JSON.parse(message)

            method(eventMessage)
        }
    })
    sub.subscribe(mChannel)
}
