import { Blockee } from '../models'

export const addBlock = (message) => {
  const { id, userId, blockId } = message.blackList
  let blockee = new Blockee({
    userId,
    blockeeId: blockId
  })
  blockee.save(() => {})
}

export const removeBlock = (message) => {
  const { id, userId, blockId } = message.blackList
  Blockee.remove({ userId, blockeeId: blockId }, () => {})
}
