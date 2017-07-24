import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import UserSchema from './User'

export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const User = mongoose.model('User', UserSchema)
