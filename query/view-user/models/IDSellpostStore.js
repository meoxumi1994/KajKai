import mongoose from '../datasource'

const IDSellpostStoreSchema = new mongoose.Schema({
  sellpostId: {type: String},
  storeId: {type: String}
})

export default IDSellpostStoreSchema
