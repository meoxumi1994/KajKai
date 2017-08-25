import mongoose from '../datasource'

const ReplyActorSchema = new mongoose.Schema({
  replyId: {type: String},
  id: {type: String},
  name: {type: String},
  avatarUrl: {type: String},
  type: {type: String}
})

export default ReplyActorSchema
