import mongoose from '../datasource'

const BasicUserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  avatarUrl: {type: String},
  followingSellposts: [String]
})

export default BasicUserSchema
