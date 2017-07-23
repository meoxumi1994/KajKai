import mongoose from '../datasource'

const EmistDetailSchema = new mongoose.Schema({
    name: {type: String},
    type: {type: String},
    lastTime: {type: Number}
})

module.exports = EmistDetailSchema

