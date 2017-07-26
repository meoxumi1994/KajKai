import redis from 'redis'
import config from '../config/pubSubConfig'
import { getClientFormatNotification } from '../services/NotificationService'

export const notify = (userId, notification) => {
  const pub = redis.createClient(config)
  const publicData = {
    notification: {
      userId,
      data: getClientFormatNotification(notification)
    }
  }
  pub.publish('NOTIFICATION', JSON.stringify(publicData))
  pub.quit()
}
