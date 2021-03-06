import { Sellpost, Postrow, BasicStore } from '../models'

export const createSellpost = (message) => {
  const { sellPostId: id, storeId, category, title, description, time, status: storeState, ship: shipStatus, postrows_order: postrowsOrder } = message.sellpost

  const sellpost = new Sellpost({
    id,
    storeId
  })

  if (category) sellpost.category = category
  if (title) sellpost.title = title
  if (description) sellpost.description = description
  sellpost.time = Date.now()
  if (storeState) sellpost.storeState = storeState
  if (shipStatus) sellpost.shipStatus = shipStatus
  if (postrowsOrder) sellpost.postrowsOrder = postrowsOrder

  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      sellpost.urlName = basicStore.urlName
      sellpost.storeName = basicStore.storeName
      sellpost.avatarUrl = basicStore.avatarUrl
    }
    sellpost.save(() => {})
  })
}


export const updateSellpost = (message) => {
  const { sellPostId: id, category, title, description, time, status: storeState, ship: shipStatus, postrows_order: postrowsOrder } = message.sellpost
  const sellpost = {}

  if (category) sellpost.category = category
  if (title) sellpost.title = title
  if (description) sellpost.description = description
  sellpost.time = Date.now()
  if (storeState) sellpost.storeState = storeState
  if (shipStatus) sellpost.shipStatus = shipStatus
  if (postrowsOrder) sellpost.postrowsOrder = postrowsOrder

  Sellpost.findOneAndUpdate({ id }, sellpost, () => {})
}

export const deleteSellpost = (message) => {
  const { sellPostId: id } = message.sellpost
  Sellpost.remove({ id }, () => {})
  Postrow.remove({ sellpostId: id }, () => {})
}
