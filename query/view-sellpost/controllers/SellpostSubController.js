import { Sellpost, Store } from '../models'

export const createSellpost = (message) => {
  const { sellPostId: id, storeId, category, title, description, time, status: storeState, ship: shipStatus } = message.sellpost

  const sellpost = new Sellpost({
    id,
    storeId
  })

  if (category) sellpost.category = category
  if (title) sellpost.title = title
  if (description) sellpost.description = description
  if (time) sellpost.time = time
  if (storeState) sellpost.storeState = storeState
  if (shipStatus) sellpost.shipStatus = shipStatus

  Store.findOne({ id: storeId }, (err, store) => {
    if (store) {
      sellpost.storeName = store.storeName
    }
    sellpost.save()
  })

}


export const updateSellpost = (message) => {
  const { sellPostId: id, category, title, description, time, status: storeState, ship: shipStatus, postrows_order: postrowOrder } = message.sellpost
  const sellpost = {}

  if (category) sellpost.category = category
  if (title) sellpost.title = title
  if (description) sellpost.description = description
  if (time) sellpost.time = time
  if (storeState) sellpost.storeState = storeState
  if (shipStatus) sellpost.shipStatus = shipStatus


  if (postrowOrder) {
    Sellpost.findOne({ id }, (err, sellpost) => {
      if (sellpost) {
        const { postrows } = sellpost
        const mPostrows = [], postrowsById = {}

        postrows.map((postrow) => {
          postrowsById[postrow.id] = postrow
        })

        postrowOrder.map((id) => {
          mPostrows.push(postrowsById[id])
        })

        sellpost.postrows = mPostrows
        sellpost.save()
      }
    })
  } else {
    Sellpost.findOneAndUpdate({ id }, sellpost)
  }
}

export const deleteSellpost = (message) => {
  const { sellPostId: id } = message.sellpost
  Sellpost.remove({ id })
}
