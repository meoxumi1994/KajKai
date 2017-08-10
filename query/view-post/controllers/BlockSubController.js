import { BasicUser } from '../models'

export const addBlock = (message) => {
  const { id, userId, blockId } = message.blackList
  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      let { blackList } = basicUser
      if (!blackList) {
        blackList = []
      }
      blackList.push(blockId)
      basicUser.blackList = blackList
      basicUser.save(() => {})
    }
  })
}

export const removeBlock = (message) => {
  const { id, userId, blockId } = message.blackList
  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      let { blackList } = basicUser
      if (!blackList) {
        blackList = []
      }
      for (let i = 0; i < blackList.length; i++) {
        if (blackList[i].id == blockId) {
          blackList.splice(i, 1)
          break
        }
      }
      basicUser.blackList = blackList
      basicUser.save(() => {})
    }
  })
}
