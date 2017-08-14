import mongoose from '../datasource'
import ProductSchema from './Product';
import OrderDetailSchema from './OrderDetail';
import OrderSchema from './Order';
import SecondLayerCommentSchema from './SecondLayerComment'
import FirstLayerCommentSchema from './FirstLayerComment'
import MatchSchema from './Match'

export const Product = mongoose.model('Product', ProductSchema);
export const OrderDetail = mongoose.model('OrderDetail',OrderDetailSchema);
export const Order = mongoose.model('Order', OrderSchema);
export const SecondLayerComment = mongoose.model('SecondLayerComment', SecondLayerCommentSchema);
export const FirstLayerComment = mongoose.model('FirstLayerComment', FirstLayerCommentSchema);
export const Match = mongoose.model('Match', MatchSchema);