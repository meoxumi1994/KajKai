import mongoose from '../datasource'

export const AddressSchema = new mongoose.Schema({
    city: {type: String},
    district: {type: String},
    street: {type: String}
});