import mongoose from '../datasource'

const UserSchema = require('./User')
export const User = mongoose.model('User', UserSchema)

const AddressSchema = require('./Address')
export const Address = mongoose.model('Address', AddressSchema)
