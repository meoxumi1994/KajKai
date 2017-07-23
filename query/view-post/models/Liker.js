import mongoose from '../datasource'

const LikerSchema = new mongoose.Schema({
  userId: {type: String},
  username: {type: String}
})

export default LikerSchema
