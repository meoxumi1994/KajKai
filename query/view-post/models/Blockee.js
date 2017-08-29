import mongoose from '../datasource'

const BlockeeSchema = new mongoose.Schema({
  userId: {type: String},
  blockeeId: {type: String}
})

export default BlockeeSchema
