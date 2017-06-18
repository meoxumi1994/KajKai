import mongoose from '../datasource'

const AddressSchema = new mongoose.Schema({
    city: {type: String},
    district: {type: String},
    street: {type: String}
});

export default AddressSchema
