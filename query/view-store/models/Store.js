import mongoose from '../datasource'
import AddressSchema from './Address'
import CategorySchema from './Category'
import CategoryAutoSchema from './CategoryAuto'
import CertificateSchema from './Certificate'
import FollowerSchema from './Follower'
import ImageSchema from './Image'
import LastUpdateSchema from './LastUpdate'
import LikerSchema from './Liker'

const StoreSchema = new mongoose.Schema({
  id: {type: String},
  userId: {type: String},
  storeName: {type: String},
  createdAt: {type: Date},
  urlName: {type: String},
  avatarUrl: {type: String},
  coverUrl: {type: String},
  imageList: [ImageSchema],
  lastUpdate: {type: LastUpdateSchema},
  address: {type: String},
  addressMap: [String],
  category: {type: String},
  firstCategoryId: {type: String},
  firstCategory: {type: String},
  secondCategoryId: {type: String},
  secondCategory: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  phone: {type: String},
  certificates: {type: CertificateSchema},
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numberOfFollow: {type: Number},
  followers: [FollowerSchema]
})

export default StoreSchema
