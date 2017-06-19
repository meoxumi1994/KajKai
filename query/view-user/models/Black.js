import mongoose from '../datasource'

const BlackSchema = new mongoose.Schema({
    id: {type: String},
    type: {type: String, enum: _.values(Language)},
    street: {type: String},
    longitute: {type: Number},
    latitute: {type: Number}
});

export default AddressSchema

id:,
type: 'userid|storeid|mesid',
name
