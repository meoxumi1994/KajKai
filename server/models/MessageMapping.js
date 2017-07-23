import mongoose from '../datasource'

const MessageMappingSchema = new mongoose.Schema({
    trivialId: {type: String},
    emitId: {type: String}
})

module.exports = MessageMappingSchema

