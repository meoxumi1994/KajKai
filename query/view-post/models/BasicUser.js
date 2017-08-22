import mongoose from '../datasource'

const BasicUserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  phone: {type: String},
  address: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  avatarUrl: {type: String},
  followingSellposts: [String],
  notifySellposts: [String]
})

export default BasicUserSchema
