import { User, Black } from '../models'

export const createUser = (message) => {
  const { id, username, email, avatarUrl, imageUrls: imageList } = message.user
  const user = new User({
    id,
    lastUpdate: {
      username: Date.now()
    }
  })

  if (username) user.username = username
  if (email) user.email = email
  if (avatarUrl) user.avatarUrl = avatarUrl
  if (imageList) user.imageList = imageList.map((image) => ({
    url: image.url,
    time: image.time
  }))

  user.save(() => {})
}

export const updateUser = (message) => {
  const { id, username, avatarUrl, coverUrl, imageUrls: imageList, address, phone, language, sex, yearOfBirth, lastUpdate, currentId } = message.user
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
              notification.name = user.username
              notification.avatarUrl = user.avatarUrl
            }
            if (notification.type.includes('LIKE')) {
              let { likers } = notification
              for (let h = 0; h < likers.length; h++) {
                if (likers[h].userId == id) {
                  likers[h].username = user.username
                  likers[h].avatarUrl = user.avatarUrl
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
            user.save(() => {})
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
        user.save(() => {})
      }
    }
  })
}
