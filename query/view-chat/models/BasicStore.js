import mongoose from '../datasource'
import ImageSchema from './Image'

const BasicStoreSchema = new mongoose.Schema({
  id: {type: String},
  userId: {type: String},
  storeName: {type: String},
  avatarUrl: {type: String},
  urlName: {type: String}
})

export default BasicStoreSchema
