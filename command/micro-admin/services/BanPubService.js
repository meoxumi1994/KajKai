import redis from 'redis'
import config from '../config/pubSubConfig'

export const addBanPub = (userId, reason) => {
  const pub = redis.createClient(config)
  const publicData = { ban: { userId, reason} }
  pub.publish('BAN.AddBan', JSON.stringify(publicData))
  pub.quit()
}

export const removeBanPub = (userId, reason) => {
  const pub = redis.createClient(config)
  const publicData = { ban: { userId, reason} }
  pub.publish('BAN.RemoveBan', JSON.stringify(publicData))
  pub.quit()
}
