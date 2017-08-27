import { User, Black } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl, imageUrls: imageList, language, socialType } = message.user
  const user = new User({
    id,
    lastUpdate: {
      username: Date.now()
    }
  })

  if (username) user.username = username
  if (email) user.email = email
  if (socialType) user.socialType = socialType
  if (avatarUrl) user.avatarUrl = avatarUrl
  if (imageList) user.imageList = imageList.map((image) => ({
    url: image.url,
    time: image.time
  }))
  user.language = language ? language : 'vi'
  user.createdAt = Date.now()

  user.save(() => {})
}

export const updateUser = (message) => {
  const { id, username, avatarUrl, coverUrl, imageUrls: imageList, address, phone, language, sex, yearOfBirth, lastUpdate, currentId, position } = message.user
  const user = {}

  if (currentId) {
    user.currentId = currentId
  }

  if (username) {
    user.username = username
    user.lastUpdate = {
      username: Date.now()
    }
  }
  if (avatarUrl) user.avatarUrl = avatarUrl
  if (coverUrl) user.coverUrl = coverUrl
  if (imageList) user.imageList = imageList.map((image) => ({
    url: image.url,
    time: image.time
  }))
  if (address) {
    user.address = address
    if (user.lastUpdate) {
      user.lastUpdate.address = Date.now()
    } else {
      user.lastUpdate = {
        address: Date.now()
      }
    }
  }
  if (position) {
    let { lng, lat } = position
    if (lng) {
      user.longitude = lng
    }
    if (lat) {
      user.latitude = lat
    }
  }
  if (phone) {
    user.phone = phone
    if (user.lastUpdate) {
      user.lastUpdate.phone = Date.now()
    } else {
      user.lastUpdate = {
        phone: Date.now()
      }
    }
  }
  if (language) user.language = language
  if (sex) user.sex = sex
  if (yearOfBirth) user.yearOfBirth = yearOfBirth

  User.findOneAndUpdate({ id }, user, () => {})
  User.find({}, (err, users) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        let mUser = users[i]
        const { notifications } = mUser
        if (notifications) {
          for (let k = 0; k < notifications.length; k++) {
            let notification = notifications[k]
            if (notification.actorId ==  id) {
              if (user.username) notification.name = user.username
              if (user.avatarUrl) notification.avatarUrl = user.avatarUrl
            }
            if (notification.type.includes('LIKE')) {
              let { likers } = notification
              for (let h = 0; h < likers.length; h++) {
                if (likers[h].userId == id) {
                  if (user.username) likers[h].username = user.username
                  if (user.avatarUrl) likers[h].avatarUrl = user.avatarUrl
                }
              }
              notification.likers = likers
            }
            notifications[k] = notification
          }
          mUser.notifications = notifications
          mUser.save(() => {})
        }
      }
    }
  })
  User.find({}, (err, users) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        let mUser = users[i]
        const { blackList } = mUser
        if (blackList) {
          for (let k = 0; k < blackList.length; k++) {
            if (blackList[k].userId == id) {
              if (user.username) blackList[k].username = user.username
              break
            }
          }
          mUser.blackList = blackList
          mUser.save(() => {})
        }
      }
    }
  })
}
