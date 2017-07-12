import mongoose from '../datasource'

const LastUpdateSchema = new mongoose.Schema({
  storeName: {type: Date},
  avatarUrl: {type: Date},
  coverUrl: {type: Date}
})

export default LastUpdateSchema
