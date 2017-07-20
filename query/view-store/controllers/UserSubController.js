import { BasicUser } from '../models'

export const createBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = new BasicUser({ id })

  if (username) basicUser.username = username
  if (avatarUrl) basicUser.avatarUrl = avatarUrl

  basicUser.save(() => {})
}

export const updateBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = {}

  if (avatarUrl) basicUser.avatarUrl = avatarUrl
  if (username) basicUser.username = username

  BasicUser.findOneAndUpdate({ id }, basicUser, () => {})
}
