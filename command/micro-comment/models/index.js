import mongoose from '../datasource'

const ProductSchema = require('./Product')
export const Product = mongoose.model('Product', ProductSchema)

const OrderDetailSchema = require('./OrderDetail')
export const OrderDetail = mongoose.model('OrderDetail',OrderDetailSchema)

const OrderSchema = require('./Order')
export const Order = mongoose.model('Order', OrderSchema)

const SecondLayerCommentSchema = require('./SecondLayerComment')
export const SecondLayerComment = mongoose.model('SecondLayerComment', SecondLayerCommentSchema)

const FirstLayerCommentSchema = require('./FirstLayerComment')
export const FirstLayerComment = mongoose.model('FirstLayerComment', FirstLayerCommentSchema)