import mongoose from '../datasource'
import ImageSchema from './Image'

const BasicStoreSchema = new mongoose.Schema({
  id: {type: String},
  storeName: {type: String},
  avatarUrl: {type: String},
  urlName: {type: String},
  postrowImageList: [ImageSchema],
  productImageList: [ImageSchema]
})

export default BasicStoreSchema
