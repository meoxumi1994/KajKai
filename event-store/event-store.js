import redis from 'redis'
import config from './config'
import saveEvent from './EventController'

const sub = redis.createClient(config)

sub.on('pmessage', (pattern, channel, message) => {
  //save this to event-store table
  console.log(pattern, channel, message)
  if (!channel.includes('USER.AuthorizeToken') && !channel.includes('Get')) {
    saveEvent(channel, JSON.parse(message))
  }
})

sub.psubscribe('*')
