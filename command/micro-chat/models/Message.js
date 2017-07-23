import MessageContentSchema from './MessageContent'
import mongoose from '../datasource'

const MessageSchema = new mongoose.Schema({
    senderId: {type: String},
    message: {type: MessageContentSchema},
    time: {type: Number},
    read: {type: Boolean, default: false},
    owner: {type: String},
    mesId: {type: String}
});

export default MessageSchema