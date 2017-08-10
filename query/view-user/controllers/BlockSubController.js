import { User } from '../models'

export const addBlock = (message) => {
  const { userId, reason } = message.ban
  const user = {
    banned: 1,
    reason
  }

  User.findOneAndUpdate({ id:  userId }, user, () => {})
}

export const removeBlock = (message) => {
  const { userId, reason } = message.ban
  const user = {
    banned: 0,
    reason
  }

  User.findOneAndUpdate({ id:  userId }, user, () => {})
}
