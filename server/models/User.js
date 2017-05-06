import mongoose from '../datasource'
import enums from '../enum'
import _ from 'lodash'

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
  birthday: {type: Date},
});

UserSchema.methods.getName = function () {
  return this.name
}

module.exports = UserSchema