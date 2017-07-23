import mongoose from '../datasource'

const MessageGroupSchema = new mongoose.Schema({
    members: [String],
    groupName: {type: String},
    groupColor: {type: String}
});

export default MessageGroupSchema