import { Order } from '../models/index'
import { getOrderDetail, getOrderDetailInfo} from './OrderDetailService'

export const getOrder = (raw) => {
    const length = raw.length;
    // var totalPrice = 0
    let listOrderDetail = [];
    for (let i = 0; i < length; ++i) {
        const orderDetail = getOrderDetail(raw[i]);
        // totalPrice += getTotalPrice(orderDetail);
        listOrderDetail.push(orderDetail)
    }
    // return new Order({totalPrice: totalPrice, orderDetails: listOrderDetail})
    return new Order({orderDetails: listOrderDetail});
};

export const getOrderInfo = (order) => {
    if (!order) return order;
    let orderInfo = [];
    console.log('this detail' + JSON.stringify(order.orderDetails));
    for (let i = 0; i < order.orderDetails.length; ++i) {
        orderInfo.push(getOrderDetailInfo(order.orderDetails[i]));
    }
    return orderInfo;
};