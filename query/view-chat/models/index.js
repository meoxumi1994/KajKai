import mongoose from '../datasource'
import BasicUserSchema from './BasicUser'
import ChatSchema from './Chat'
import ContentSchema from './Content'
import MessageSchema from './Message'

export const BasicUser = mongoose.model('BasicUser', BasicUserSchema)
export const Chat = mongoose.model('Chat', ChatSchema)
export const Content = mongoose.model('Content', ContentSchema)
export const Message = mongoose.model('Message', MessageSchema)
