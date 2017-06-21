import mongoose from '../datasource'
import CommentSchema from './Comment'
import FollowerSchema from './Follower'
import LikerSchema from './Liker'
import PostrowSchema from './Postrow'
import ProductSchema from './Product'
import ReplySchema from './Reply'
import SellpostSchema from './Sellpost'
import TitleSchema from './Title'

export const Comment = mongoose.model('Comment', CommentSchema)
export const Follower = mongoose.model('Follower', FollowerSchema)
export const Liker = mongoose.model('Liker', LikerSchema)
export const Postrow = mongoose.model('Postrow', PostrowSchema)
export const Product = mongoose.model('Product', ProductSchema)
export const Reply = mongoose.model('Reply', ReplySchema)
export const Sellpost = mongoose.model('Sellpost', SellpostSchema)
export const Title = mongoose.model('Title', TitleSchema)
