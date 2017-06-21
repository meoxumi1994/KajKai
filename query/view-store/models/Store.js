import mongoose from '../datasource'
import AddressSchema from './Address'
import CategorySchema from './Category'
import CategoryAutoSchema from './CategoryAuto'
import CertificateSchema from './Certificate'
import FollowerSchema from './Follower'
import LastUpdateSchema from './LastUpdate'
import LikerSchema from './Liker'

const StoreSchema = new mongoose.Schema({
  id: {type: String},
  userId: {type: String},
  storeName: {type: String},
  avatarUrl: {type: String},
  coverUrl: {type: String},
  lastUpdate: {type: LastUpdateSchema},
  address: {type: AddressSchema},
  addressMap: [String],
  category: {type: CategorySchema},
  categoryAuto: {type: CategoryAutoSchema},
  latitute: {type: Number},
  longitute: {type: Number},
  phone: {type: String},
  certificates: {type: CertificateSchema},
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numerOfFollow: {type: Number},
  followers: [FollowerSchema]
})

export default StoreSchema
