import { User, Black } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl } = message.user
  const user = new User({ id })

  if (username) user.username = username
  if (email) user.email = email
  if (avatarUrl) user.avatarUrl = avatarUrl

  user.save()
}

export const updateUser = (message) => {
  const { id, username, avatarUrl, coverUrl, address, phone, language, sex, yearOfBirth, lastUpdate } = message.user
  const user = {}

  if (username) user.username = username
  if (avatarUrl) user.avatarUrl = avatarUrl
  if (coverUrl) user.coverUrl = coverUrl
  if (address) user.address = address
  if (phone) user.phone = phone
  if (language) user.language = language
  if (sex) user.sex = sex
  if (yearOfBirth) user.yearOfBirth = yearOfBirth
  if (lastUpdate) user.lastUpdate = lastUpdate

  User.findOneAndUpdate({ id }, user)
}

export const updateBlackList = (message) => {
  const { userId: id, blockId, status } = message.user

  User.findOne({ id }, (err, user) => {
    if (user) {
      const { blackList } = user

      if (status == 'add') {
        User.findOne({ id: blockId }, (err, user) => {
          if(user) {
            const black = new Black({
              id: blockId,
              type: '???',
              name: user.username
            })

            blackList.push(black)

            user.blackList = blackList
            user.save()
          }
        })
      } else {
        for (let i = 0; i < blackList.length; i++) {
          if (blackList[i].id == blockid) {
            blackList.splice(i, 1)
            break
          }
        }

        user.blackList = blackList
        user.save()
      }
    }
  })
}
