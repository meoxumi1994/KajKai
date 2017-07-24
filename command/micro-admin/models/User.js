import mongoose from '../datasource'
import AdminSchema from './Admin'
import BasicStoreSchema from './BasicStore'

const UserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  email: {type: String},
  avatarUrl: {type: String},
  banned: {type: Number},
  bannedBy: {type: AdminSchema},
  storeList: [BasicStoreSchema]
})

export default UserSchema
