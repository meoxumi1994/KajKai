import mongoose from '../datasource'
import _ from 'lodash'
import { Sex, Language } from '../enum'
import AddressSchema from './Address'
import LastUpdateSchema from './LastUpdate'
import BlackSchema from './Black'
import PrivacySchema from './Privacy'

const UserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  email: {type: String},
  avatarUrl: {type: String},
  coverUrl: {type: String},
  phone: {type: String},
  address: {type: AddressSchema},
  language: {type: String, enum: _.values(Language)},
  sex: {type: String, enum: _.values(Sex)},
  yearOfBirth: {type: Number},
  lastUpdate: {type: LastUpdateSchema},
  blacklist: [BlackSchema],
  privacy: {type: PrivacySchema}
})

export default UserSchema
