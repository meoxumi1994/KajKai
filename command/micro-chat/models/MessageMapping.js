import mongoose from '../datasource'

const MessageMappingSchema = new mongoose.Schema({
    mesId: {type: String},
    userIdCombination: {type: String}
});

export default MessageMappingSchema