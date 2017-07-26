import mongoose from '../datasource'
import AddressSchema from './Address'
import BasicStoreSchema from './BasicStore'
import BlackSchema from './Black'
import CommentLikerSchema from './CommentLiker'
import IDCommentSellpostSchema from './IDCommentSellpost'
import IDReplyCommentSellpostSchema from './IDReplyCommentSellpost'
import IDSellpostStoreSchema from './IDSellpostStore'
import ImageSchema from './Image'
import InterestSchema from './Interest'
import LastUpdateSchema from './LastUpdate'
import NotificationSchema from './Notification'
import PrivacySchema from './Privacy'
import ReplyLikerSchema from './ReplyLiker'
import SellpostLikerSchema from './SellpostLiker'
import UserSchema from './User'

export const Address = mongoose.model('Address', AddressSchema)
export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const Black = mongoose.model('Black', BlackSchema)
export const CommentLiker = mongoose.model('CommentLiker', CommentLikerSchema)
export const IDCommentSellpost = mongoose.model('IDCommentSellpost', IDCommentSellpostSchema)
export const IDReplyCommentSellpost = mongoose.model('IDReplyCommentSellpost', IDReplyCommentSellpostSchema)
export const IDSellpostStore = mongoose.model('IDSellpostStore', IDSellpostStoreSchema)
export const Image = mongoose.model('Image', ImageSchema)
export const Interest = mongoose.model('Interest', InterestSchema)
export const LastUpdate = mongoose.model('LastUpdate', LastUpdateSchema)
export const Notification = mongoose.model('Notification', NotificationSchema)
export const Privacy = mongoose.model('Privacy', PrivacySchema)
export const ReplyLiker = mongoose.model('ReplyLiker', ReplyLikerSchema)
export const SellpostLiker = mongoose.model('SellpostLiker', SellpostLikerSchema)
export const User = mongoose.model('User', UserSchema)
