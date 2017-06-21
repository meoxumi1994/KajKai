import mongoose from '../datasource'
import _ from 'lodash'
import { Sex, Language } from '../enum'
import AddressSchema from './Address'
import BlackSchema from './Black'
import LastUpdateSchema from './LastUpdate'
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
  blackList: [BlackSchema],
  privacy: {type: PrivacySchema}
})

export default UserSchema
