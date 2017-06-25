import mongoose from '../datasource'

const StoreSchema = new mongoose.Schema({
  id: {type: String},
  storeName: {type: String}
})

export default StoreSchema
