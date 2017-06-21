import { User } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl } = message
  const user = new User({
    id
  })

  if(username) user.username = username
  if(email) user.email = email
  if(avatarUrl) user.avatarUrl = avatarUrl

  user.save()
}

export const updateUser = (message) => {
  const { id, avatarUrl, coverUrl, address, phone, language, sex, yearOfBirth, lastUpdate, blacklist } = message
  const user = {}

  if(id) user.id = id
  if(avatarUrl) user.avatarUrl = avatarUrl
  if(coverUrl) user.coverUrl = coverUrl
  if(address) user.address = address
  if(phone) user.phone = phone
  if(language) user.language = language
  if(sex) user.sex = sex
  if(yearOfBirth) user.yearOfBirth = yearOfBirth
  if(lastUpdate) user.lastUpdate = lastUpdate
  if(blacklist) user.blacklist = blacklist

  User.findOneAndUpdate({ id }, user)
}
