import mongoose from '../datasource'

const BasicUserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  avatarUrl: {type: String},
  banned: {type: Number},
  reason: {type: String}
})

export default BasicUserSchema
