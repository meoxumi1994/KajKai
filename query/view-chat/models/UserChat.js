import mongoose from '../datasource'
import ChatSchema from './Chat'

const UserChatSchema = new mongoose.Schema({
  id: {type: String},
  chats: [ChatSchema]
})

export default UserChatSchema
