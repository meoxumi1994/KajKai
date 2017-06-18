import mongoose from '../datasource'
import { SocialType, Language } from '../enum'
import _ from 'lodash'
import AddressSchema from './Address'
import LastUpdateSchema from './LastUpdate'

const UserSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    avatarUrl: {type: String},
    coverUrl: {type: String},
    phone: {type: String},
    address: {type: AddressSchema},
    language: {type: String, enum: _.values(Language)},
    sex: {type: String},
    yearOfBirth: {type: Number},
    lastUpdate: {type: LastUpdateSchema},
    blacklist: []
});

export default UserSchema
