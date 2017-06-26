import mongoose from '../datasource'

const MessageSchema = new mongoose.Schema({
    members: [String],
    groupName: {type: String},
    groupColor: {type: String}
});