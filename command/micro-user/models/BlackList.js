import mongoose from '../datasource'

export const BlackListSchema = new mongoose.Schema({
    userId: {type: String},
    blockId: {type: String},
    name: {type: String}
});

export default BlackListSchema
