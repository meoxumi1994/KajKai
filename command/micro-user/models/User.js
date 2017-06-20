import mongoose from '../datasource'
import { SocialType, Language, PrivacyAEP, PrivacyOthers } from '../enum'
import _ from 'lodash'
import {AddressSchema} from './Address'

export const UserSchema = new mongoose.Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    socialNetworkType: {type: String, enum: _.values(SocialType)},
    socialNetworkId: {type: String},
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
    phoneLastUpdateAt: {type: Date},
    privacyAEP: {type: String, enum: _values(PrivacyAEP)},
    privacyOthers: {type: String, enum: _values(PrivacyOthers)}
});

export default UserSchema
