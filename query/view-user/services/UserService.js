import { User, Address } from '../models'
import jwt from 'jsonwebtoken'

export const getUser = (id, next) => {
  User.findOne({ id }, function(err, user) {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            id
          })
        }
      } else {
          next({
            id: user.id,
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            coverUrl: user.coverUrl,
            address: user.address,
            phone: user.phone,
            language: user.language,
            sex: user.sex,
            yearOfBirth: user.yearOfBirth,
            lastUpdate: user.lastUpdate,
            blacklist: user.blackList
          })
      }
  })
}

export const getUserPrivacy = (id, next) => {
  User.findOne({ id }, function(err, user) {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            id
          })
        }
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
