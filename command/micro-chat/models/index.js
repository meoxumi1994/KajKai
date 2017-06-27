import mongoose from '../datasource'
import MessageSchema from './Message'
import MessageContentSchema from './MessageContent'
import MessageGroupSchema from './MessageGroup'
import MessageMappingSchema from './MessageMapping'
import UnreadMessageCountSchema from './UnreadMessageCount'

export const MessageContent = mongoose.model('MessageContent', MessageContentSchema);
export const Message = mongoose.model('Message', MessageSchema);
export const MessageGroup = mongoose.model('MessageGroup', MessageGroupSchema);
export const MessageMapping = mongoose.model('MessageMapping', MessageMappingSchema);
export const UnreadMessageCount = mongoose.model('UnreadMessageCount', UnreadMessageCountSchema);

