import { BasicUser } from '../models'

export const getNotifySellposts = (userId, next) => {
  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      let { notifySellposts } = basicUser
      if (!notifySellposts) {
        notifySellposts = []
      }
      next(notifySellposts)
    } else {
      next([])
    }
  })
}
