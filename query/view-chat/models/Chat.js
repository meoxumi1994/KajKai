import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'
import MessageSchema from './Message'

const ChatSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String},
  users: [BasicUserSchema],
  store: {type: BasicStoreSchema},
  messages: [MessageSchema],
  lastMessageTime: {type: Date}
})

export default ChatSchema
