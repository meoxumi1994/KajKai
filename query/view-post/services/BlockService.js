import { Blockee } from '../models'

export const getBlackList = (next) => {
  Blockee.find({}, (err, blackList) => {
    if (blackList) {
      next(blackList.map((black) => (black.blockeeId)))
    } else {
      next([])
    }
  })
}
