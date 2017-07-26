import { User } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl } = message.user
  const user = new User({ id, banned: 0 })

  if (username) user.username = username
  if (email) user.email = email
  if (avatarUrl) user.avatarUrl = avatarUrl

  user.save(() => {})
}

export const updateUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const user = {}

  if (username) user.username = username
  if (avatarUrl) user.avatarUrl = avatarUrl

  User.findOneAndUpdate({ id }, user, () => {})
}
