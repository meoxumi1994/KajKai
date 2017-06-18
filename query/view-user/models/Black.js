import mongoose from '../datasource'
import { BlackType } from '../enum'

const BlackSchema = new mongoose.Schema({
    id: {type: String},
    type: {type: String, enum: _.values(BlackType)},
    name: {type: String}
});

export default BlackSchema
