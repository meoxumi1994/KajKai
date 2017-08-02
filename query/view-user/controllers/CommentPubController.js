import redis from 'redis'
import config from '../config/pubSubConfig'
import uuidV4 from 'uuid/v4'

export const getCommentsAdditionalInfo = (commentIds, next) => {
  const sub = redis.createClient(config)
  const pub = redis.createClient(config)
  const id = uuidV4()
  const publicData = { commentIds, eventId: id}
  pub.publish('ODERMANAGEMENT', JSON.stringify(publicData))
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
  sub.subscribe('ODERMANAGEMENT' + id)
}
