import redis from 'redis'
import config from '../config/pubSubConfig'
import { getClientFormatNotification } from '../services/NotificationService'

export const notify = (notification) => {
  const pub = redis.createClient(config)
  const publicData = { notification: getClientFormatNotification(notification) }
  pub.publish('NOTIFICATION', JSON.stringify(publicData))
  pub.quit()
}
