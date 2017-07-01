import { getStore } from '../services/StoreService.js'

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
