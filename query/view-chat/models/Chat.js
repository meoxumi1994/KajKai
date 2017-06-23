import mongoose from '../datasource'
import BasicUserSchema from './BasicUser'
import MessageSchema from './Content'

const ChatSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String},
  users: [BasicUserSchema],
  messages: [MessageSchema],
  lastMessageTime: {type: Date}
})

export default ChatSchema
