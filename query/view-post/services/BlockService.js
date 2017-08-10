import { Blockee } from '../models'

export getBlackList = (next) => {
  Blockee.find({}, (err, blackList) => {
    if (blackList) {
      next(blackList.map((black) => (black.blockeeId)))
    } else {
      next([])
    }
  })
}
