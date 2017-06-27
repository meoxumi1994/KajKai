import mongoose from '../datasource'

const BasicStoreSchema = new mongoose.Schema({
  id: {type: String},
  storeName: {type: String}
})

export default BasicStoreSchema
