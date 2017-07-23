import mongoose from '../datasource'

const LikerSchema = new mongoose.Schema({
  avatarUrl: {type: String},
  userId: {type: String},
  username: {type: String}
})

export default LikerSchema
