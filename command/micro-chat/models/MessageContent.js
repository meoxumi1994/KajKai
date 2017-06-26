import mongoose from '../datasource'

const MessageContentSchema = new mongoose.Schema({
    text: {type: String},
    url: {type: String},
    type: {type: String}
});

export default MessageContentSchema;
