import mongoose from '../datasource'
import OrderDetailSchema from './OrderDetail'

const OrderSchema = new mongoose.Schema({
    orderDetails: [OrderDetailSchema],
    totalPrice: {type: Number}
});

export default OrderSchema;
