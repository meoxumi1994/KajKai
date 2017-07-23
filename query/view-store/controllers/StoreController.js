import { getStore, getStores, getStoreImageList } from '../services/StoreService.js'

export const getStoreHandler = () => (req, res) => {
  const { id } = req.params
  const requesterId = req.decoded._id

  getStore(requesterId, id, (store) => {
    if (store) {
      res.json(store)
    } else {
      res.json({status: 'failed'})
    }
  })
}

export const getStoresHandler = () => (req, res) => {
  if (req.decoded) {
    const { swlat, swlng, nelat, nelng, length } = req.params

    getStores(swlat, swlng, nelat, nelng, length, (stores) => {
      if (stores) {
        res.json(stores)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}

export const getStoreImageListHandler = () => (req, res) => {
  let { id: requestedId } = req.params
  let requesterId = req.decoded._id

  if(!requestedId) {
    requestedId = requesterId
  }

  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getStoreImageList(requesterId, requestedId, offset, (storeImageList) => {
    if (storeImageList) {
      res.json(storeImageList)
    } else {
      res.json({status: 'failed'})
    }
  })
}
