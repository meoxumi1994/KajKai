import mongoose from '../datasource'
import { OrderDetailSchema } from './OrderDetail'

export const OrderSchema = new mongoose.Schema({
    orderDetails: [OrderDetailSchema],
    totalPrice: {type: Number}
});
