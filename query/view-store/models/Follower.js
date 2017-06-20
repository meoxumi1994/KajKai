import mongoose from '../datasource'

const FollowerSchema = new mongoose.Schema({
  avatarUrl: {type: String},
  userId: {type: String},
  username: {type: String}
})

export default FollowerSchema
