import mongoose from '../datasource'
import UserSchema from './User'
import AddressSchema from './Address'

export const User = mongoose.model('User', UserSchema)
export const Address = mongoose.model('Address', AddressSchema)
