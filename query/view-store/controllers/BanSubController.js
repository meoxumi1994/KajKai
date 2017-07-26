import { BasicUser } from '../models'

export const addBan = (message) => {
  const { userId, reason } = message.ban
  const basicUser = {
    banned: 1,
    reason
  }

  BasicUser.findOneAndUpdate({ id:  userId }, basicUser, () => {})
}

export const removeBan = (message) => {
  const { userId, reason } = message.ban
  const basicUser = {
    banned: 0,
    reason
  }

  BasicUser.findOneAndUpdate({ id:  userId }, basicUser, () => {})
}
