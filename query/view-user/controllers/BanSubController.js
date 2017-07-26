import { User } from '../models'

export const addBan = (message) => {
  const { userId, reason } = message.ban
  const user = {
    banned: 1,
    reason
  }

  User.findOneAndUpdate({ id:  userId }, user, () => {})
}

export const removeBan = (message) => {
  const { userId, reason } = message.ban
  const user = {
    banned: 0,
    reason
  }

  User.findOneAndUpdate({ id:  userId }, user, () => {})
}
