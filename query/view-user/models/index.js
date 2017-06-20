import mongoose from '../datasource'
import UserSchema from './User'
import AddressSchema from './Address'
import LastUpdateSchema from './LastUpdate'
import BlackSchema from './Black'

export const User = mongoose.model('User', UserSchema)
export const Address = mongoose.model('Address', AddressSchema)
export const LastUpdate = mongoose.model('LastUpdate', LastUpdateSchema)
export const Black = mongoose.model('Black', BlackSchema)
