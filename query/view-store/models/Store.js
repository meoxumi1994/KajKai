import mongoose from '../datasource'
import LastUpdateSchema from './LastUpdate'
import AddressSchema from './Address'
import CategorySchema from './Category'
import CertificateSchema from './Certificate'
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
  numlike: {type: Number},
  likes: [LikerSchema],
  numfollow: {type: Number},
  follows: [FollowerSchema]
})

export default StoreSchema
