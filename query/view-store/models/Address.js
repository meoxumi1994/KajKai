import mongoose from '../datasource'

const AddressSchema = new mongoose.Schema({
  city: {type: String},
  district: {type: String},
  street: {type: String},
  longitute: {type: Number},
  latitute: {type: Number}
})

export default AddressSchema
