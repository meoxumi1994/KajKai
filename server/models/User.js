import mongoose from '../datasource'
import enums from '../enum'
import _ from 'lodash'
import { Store } from '.'
console.log(Store)

const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  socialNetworkType: {type: String, enum: _.values(enums.SocialType)},
  socialNetworkId: {type: String},
  resetPasswordCode: {type: String},
  resetPasswordExpiration: Date,
  imageUrl: {type: String},
  phone: {type: String},
  address: {type: String},
  language: {type: String, enum: _.values(enums.Language)},
  sex: {type: String},
  yearOfBirth: {type: Number},
  verified: {type: Number},
  passwordLastUpdatedAt: {type: Date},
  nameLastUpdatedAt: {type: Date},
  yearOfBirthLastUpdateAt: {type: Date},
  addressLastUpdateAt: {type: Date},
});

UserSchema.methods.getName = function () {
  return this.name
}

module.exports = UserSchema
