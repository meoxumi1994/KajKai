import { User, BasicUser } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl } = message.user
  const user = new User({ id, banned: 0 })

  if (username) user.username = username
  if (email) user.email = email
  if (avatarUrl) user.avatarUrl = avatarUrl

  user.save(() => {})

  const basicUser = new BasicUser({
    id
  })

  if (username) basicUser.username = username
  if (email) basicUser.email = email
  if (avatarUrl) basicUser.avatarUrl = avatarUrl

  basicUser.save(() => {})
}

export const updateUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const user = {}

  if (username) user.username = username
  if (avatarUrl) user.avatarUrl = avatarUrl

  User.findOneAndUpdate({ id }, user, () => {})
  BasicUser.findOneAndUpdate({ id }, user, () => {})
}
