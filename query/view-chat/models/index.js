import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'
import ChatSchema from './Chat'
import ContentSchema from './Content'
import MessageSchema from './Message'
import UserChatSchema from './UserChat'

export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const BasicUser = mongoose.model('BasicUser', BasicUserSchema)
export const Chat = mongoose.model('Chat', ChatSchema)
export const Content = mongoose.model('Content', ContentSchema)
export const Message = mongoose.model('Message', MessageSchema)
export const UserChat = mongoose.model('UserChat', UserChatSchema)
