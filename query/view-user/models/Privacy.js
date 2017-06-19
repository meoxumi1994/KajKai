import mongoose from '../datasource'
import _ from 'lodash'
import { PrivacyAEP, PrivacyOthers } from '../enum'

const PrivacySchema = new mongoose.Schema({
  address_email_phone: {type: String, enum: _.values(PrivacyAEP)},
  others: {type: String, enum: _.values(PrivacyOthers)}
});

export default PrivacySchema
