import mongoose from '../datasource'
import {SocialType, Language} from '../enum'
import _ from 'lodash'
import AddressSchema from './Address'

const UserSchema = new mongoose.Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    socialNetworkType: {type: String, enum: _.values(SocialType)},
    socialNetworkId: {type: String},
    resetPasswordCode: {type: String},
    resetPasswordExpiration: Date,
    imageUrl: [String],
    avatarUrl: {type: String},
    coverUrl: {type: String},
    phone: {type: String},
    address: {type: AddressSchema},
    language: {type: String, enum: _.values(Language)},
    sex: {type: String},
    yearOfBirth: {type: Number},
    verified: {type: Number},
    passwordLastUpdatedAt: {type: Date},
    nameLastUpdatedAt: {type: Date},
    yearOfBirthLastUpdateAt: {type: Date},
    addressLastUpdateAt: {type: Date},
});

export default UserSchema
