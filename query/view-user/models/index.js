import mongoose from '../datasource'
import AddressSchema from './Address'
import BasicStoreSchema from './BasicStore'
import BlackSchema from './Black'
import ImageSchema from './Image'
import LastUpdateSchema from './LastUpdate'
import NotificationSchema from './Notification'
import PrivacySchema from './Privacy'
import UserSchema from './User'

export const Address = mongoose.model('Address', AddressSchema)
export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const Black = mongoose.model('Black', BlackSchema)
export const Image = mongoose.model('Image', ImageSchema)
export const LastUpdate = mongoose.model('LastUpdate', LastUpdateSchema)
export const Notification = mongoose.model('Notification', NotificationSchema)
export const Privacy = mongoose.model('Privacy', PrivacySchema)
export const User = mongoose.model('User', UserSchema)
