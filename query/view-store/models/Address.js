import mongoose from '../datasource'

const AddressSchema = new mongoose.Schema({
  city: {type: String},
  district: {type: String},
  street: {type: String},
  longitude: {type: Number},
  latitude: {type: Number}
})

export default AddressSchema
