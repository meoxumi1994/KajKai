import mongoose from '../datasource'

const EmistSocketDetailSchema = new mongoose.Schema({
    followerId: {type: String},
    emitId: {type: String}
})

module.exports = EmistSocketDetailSchema

