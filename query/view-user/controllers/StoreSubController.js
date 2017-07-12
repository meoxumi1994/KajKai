import { User } from '../models'

export const updateStoreIdList = (message) => {
  const { id: storeId, owner: id } = message.store

  User.findOne({ id }, (err, user) => {
    if (user) {
      let { storeIdList } = user
      if (!storeIdList) {
        storeIdList = []
      }
      storeIdList.push(storeId)
      user.save()
    }
  })
}
