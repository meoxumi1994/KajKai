import { User, Interest } from '../models'

export const addInterest = (message) => {
  const { id, userId, categoryId, categoryName, longitude, latitude } = message.interest
  const interest = new Interest({
    id,
    categoryId,
    categoryName,
    longitude,
    latitude,
    time: Date.now()
  })

  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      let { interests } = user
      if (!interests) {
        interests = []
      }
      interests.push(interest)
      user.interests = interests
      user.save(() => {})
    }
  })
}

export const removeInterest = (message) => {
  const { id, userId } = message.interest

  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      let { interests } = user
      for (let i = 0; i < interests.length; i++) {
        if (interests[i].id == id) {
          interests.splice(i, 1)
          break
        }
      }
      user.interests = interests
      user.save(() => {})
    }
  })
}
