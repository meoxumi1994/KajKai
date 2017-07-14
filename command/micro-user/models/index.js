import mongoose from '../datasource'
import AddressSchema from './Address'
import BlackListSchema from './BlackList'
import UserSchema from './User'
import ImageSchema from './Image'

export const Address = mongoose.model('Address', AddressSchema);
export const BlackList = mongoose.model('BlackList', BlackListSchema);
export const User = mongoose.model('User', UserSchema);
export const Image = mongoose.model('Image', ImageSchema);
