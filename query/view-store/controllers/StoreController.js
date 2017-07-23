import { getStore, getStores } from '../services/StoreService.js'

export const getStoreHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params

    getStore(id, (store) => {
      if (store) {
        res.json(store)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
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
