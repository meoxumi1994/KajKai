import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'
import BlockeeSchema from './Blockee'
import CommentSchema from './Comment'
import FollowerSchema from './Follower'
import ImageSchema from './Image'
import LikerSchema from './Liker'
import MinorpostSchema from './Minorpost'
import PostrowSchema from './Postrow'
import ProductSchema from './Product'
import ReplySchema from './Reply'
import SellpostSchema from './Sellpost'
import TitleSchema from './Title'

export const BasicStore = mongoose.model('BasicStore', BasicStoreSchema)
export const BasicUser = mongoose.model('BasicUser', BasicUserSchema)
export const Blockee = mongoose.model('Blockee', BlockeeSchema)
export const Comment = mongoose.model('Comment', CommentSchema)
export const Follower = mongoose.model('Follower', FollowerSchema)
export const Image = mongoose.model('Image', ImageSchema)
export const Liker = mongoose.model('Liker', LikerSchema)
export const Minorpost = mongoose.model('Minorpost', MinorpostSchema)
export const Postrow = mongoose.model('Postrow', PostrowSchema)
export const Product = mongoose.model('Product', ProductSchema)
export const Reply = mongoose.model('Reply', ReplySchema)
export const Sellpost = mongoose.model('Sellpost', SellpostSchema)
export const Title = mongoose.model('Title', TitleSchema)
