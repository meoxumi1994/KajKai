import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'

const UserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  email: {type: String},
  avatarUrl: {type: String},
  banned: {type: Number},
  bannedById: {type: String},
  bannedByAdminName: {type: String},
  storeList: [BasicStoreSchema]
})

export default UserSchema
