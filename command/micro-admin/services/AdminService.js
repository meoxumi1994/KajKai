import { Admin, User } from '../models'
import jwt from 'jsonwebtoken'

export const getAdmin = (adminName, password, next) => {
  Admin.findOne({ adminName, password }, (err, admin) => {
    if (admin) {
      next(admin)
    } else {
      next(null)
    }
  })
}

export const getUsers = (offset, length, next) => {
  User.find({}, (err, users) => {
    if (users) {
      next({
        status: 'success',
        data: offset >= users.length ? [] : users.slice(offset, length).map((user) => ({
          id: user.id,
          username: user.username,
          avatarUrl: user.avatarUrl,
          status: user.banned == 0,
          email: user.email,
          stores: user.storeList ? user.storeList.map((basicStore) => ({
            id: basicStore.id,
            storename: basicStore.storeName,
            avatarUrl: basicStore.avatarUrl,
            url: basicStore.urlName
          })) : []
        }))
      })
    } else {
      next({
        status: 'nodata',
        data: []
      })
    }
  })
}

export const getFeedbacks = (offet, length, next) => {
  
}

export const verifyAdminToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'adminsecret')
        return decoded;
    } catch(err) {
        return null
    }
}

export const getAdminToken = (id) => {
    let curId = id.toString()
    return jwt.sign({_id: curId}, 'adminsecret', { expiresIn: 60 * 60 * 60 })
}
