import mongoose from '../datasource'

const PhoneSchema = new mongoose.Schema({
    phone: {type: String},
    code: {type: String}
});

export default PhoneSchema
