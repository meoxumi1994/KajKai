import mongoose from '../datasource'
import AdminSchema from './Admin'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'
import FeedbackSchema from './Feedback'
import UserSchema from './User'

export const Admin = mongoose.model('Admin', AdminSchema)
export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const BasicUser = mongoose.model('BasicUser', BasicUserSchema)
export const Feedback = mongoose.model('Feedback', FeedbackSchema)
export const User = mongoose.model('User', UserSchema)
