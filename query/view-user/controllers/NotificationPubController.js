import redis from 'redis'
import config from '../config/pubSubConfig'

export const notify = (notification) => {
  const pub = redis.createClient(config)
  const publicData = { notification }
  pub.publish('NOTIFICATION', JSON.stringify(publicData))
  pub.quit()
}
