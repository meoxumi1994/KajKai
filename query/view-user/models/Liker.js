import mongoose from '../datasource'

const LikerSchema = new mongoose.Schema({
  userId: {type: String},
  username: {type: String},
  storeId: {type: String},
  storeName: {type: String},
  avatarUrl: {type: String}
})

export default LikerSchema
