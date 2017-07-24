import mongoose from '../datasource'
import { SocialType, Language, PrivacyAEP, PrivacyOthers } from '../enum'
import _ from 'lodash'
import AddressSchema from './Address'
import ImageSchema from './Image'

const UserSchema = new mongoose.Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    socialNetworkType: {type: String, enum: _.values(SocialType)},
    socialNetworkId: {type: String},
    imageUrl: [ImageSchema],
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
    privacyAEP: {type: String, enum: _.values(PrivacyAEP)},
    privacyOthers: {type: String, enum: _.values(PrivacyOthers)},
    banned: {type: Number},
    banReason: {type: String}
});

export default UserSchema
