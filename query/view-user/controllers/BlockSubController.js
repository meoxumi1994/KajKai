import { User, Black } from '../models'

export const addBlock = (message) => {
  const { id, userId, blockId } = message.blackList
  User.findOne({ id: blockId }, (err, blockee) => {
    if (blockee) {
      const black = new Black({
        id,
        userId: blockId,
        username: blockee.username
      })
      User.findOne({ id: userId }, (err, user) => {
        if (user) {
          let { blackList } = user
          if (!blackList) {
            blackList = []
          }
          blackList.push(black)
          user.blackList = blackList
          user.save(() => {})
        }
      })
    }
  })
}

export const removeBlock = (message) => {
  const { id, userId } = message.blackList
  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      let { blackList } = user
      if (!blackList) {
        blackList = []
      }
      for (let i = 0; i < blackList.length; i++) {
        if (blackList[i].id == id) {
          blackList.splice(i, 1)
          break
        }
      }
      user.blackList = blackList
      user.save(() => {})
    }
  })
}
