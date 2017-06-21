import { getStore } from '../services/StoreService.js'

export const getStoreHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params

    getStore(id, (store) => {
      if (store) {
        res.send(store)
      } else {
        res.send({status: 'failed'})
      }
    })
    
  } else {
    res.send({status: 'failed'})
  }
}
