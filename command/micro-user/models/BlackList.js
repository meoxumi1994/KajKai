import mongoose from '../datasource'

const BlackListSchema = new mongoose.Schema({
    userId: {type: String},
    blockId: {type: String},
    name: {type: String}
});

export default BlackListSchema
