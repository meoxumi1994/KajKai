import mongoose from '../datasource'

const FollowerSchema = new mongoose.Schema({
  userId: {type: String},
  username: {type: String}
})

export default FollowerSchema
