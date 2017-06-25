import mongoose from '../datasource'
import ContentSchema from './Content'

const MessageSchema = new mongoose.Schema({
  userId: {type: String},
  time: {type: Date},
  content: {type: ContentSchema}
})

export default MessageSchema
