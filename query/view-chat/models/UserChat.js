import mongoose from '../datasource'
import ChatSchema from './Chat'

const UserChatSchema = new mongoose.Schema({
  userId: {type: String},
  chats: [ChatSchema]
})

export default UserChatSchema
