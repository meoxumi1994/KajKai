import mongoose from '../datasource'
import _ from 'lodash'
import { BlackType } from '../enum'

const BlackSchema = new mongoose.Schema({
    id: {type: String},
    type: {type: String, enum: _.values(BlackType)},
    name: {type: String}
});

export default BlackSchema
