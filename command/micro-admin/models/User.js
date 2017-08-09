import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'

const UserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  email: {type: String},
  avatarUrl: {type: String},
  banned: {type: Number},
  bannedById: {type: String},
  lastReason: {type: String},
  bannedByAdminName: {type: String},
  time: {type: Date},
  storeList: [BasicStoreSchema],
  language: {type: String}
})

export default UserSchema
