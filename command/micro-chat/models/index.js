import mongoose from '../datasource'
import MessageSchema from './Message'
import MessageContentSchema from './MessageContent'
import MessageGroupSchema from './MessageGroup'
import MessageMappingSchema from './MessageMapping'

export const MessageContent = mongoose.model('MessageContent', MessageContentSchema);
export const Message = mongoose.model('Message', MessageSchema);
export const MessageGroup = mongoose.model('MessageGroup', MessageGroupSchema);
export const MessageMapping = mongoose.model('MessageMapping', MessageMappingSchema);

