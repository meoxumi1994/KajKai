import mongoose from '../datasource'

const BlackSchema = new mongoose.Schema({
    id: {type: String},
    userId: {type: String},
    username: {type: String}
});

export default BlackSchema
