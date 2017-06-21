import { User, Address } from '../models'

export const getUser = (id, next) => {
  User.findOne({ id }, function(err, user) {
      if (err) {
          next(null)
      } else {
          next({
            id: user.id,
            username: user.userName,
            email: user.email,
            avatarUrl: user.avatarUrl,
            coverUrl: user.coverUrl,
            address: user.address,
            phone: user.phone,
            language: user.language,
            sex: user.sex,
            yearOfBirth: user.yearOfBirth,
            lastUpdate: {
                username: user.lastUpdate.username,
                phone: user.lastUpdate.phone,
                address: user.lastUpdate.address,
            },
            blacklist: user.blackList
          })
      }
  })
}

export const getUserPrivacy = (id, next) => {
  User.findOne({ id }, function(err, user) {
      if (err) {
          next(null)
      } else {
          next({
            id: user.id,
            address_email_phone: user.privacy.address_email_phone,
            another: user.privacy.others
          })
      }
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
