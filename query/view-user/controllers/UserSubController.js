import { User } from '../models'

export const createUser = (message) => {
  const { id, username, email } = message

  const user = new User({
    id,
    username,
    email
  })

  user.save()
}

export const updateUser = (message) => {
  const { id, avatarUrl, coverUrl, address, phone, language, sex, yearOfBirth, lastUpdate, blacklist } = message

  User.findOneAndUpdate({
    id: id
  }, {
    avatarUrl, coverUrl, address, phone, language, sex, yearOfBirth, lastUpdate, blacklist
  })

}

// export const updatePhone = (message) => {
//
// }
//
// export const updateBlackList = (message) => {
//
// }
//
// export const testHandler = (message) => {
//   console.log('xxxxxxxxxx', message);
// }
