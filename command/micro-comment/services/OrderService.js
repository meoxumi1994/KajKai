import { Order } from '../models/index'
import { getOrderDetail, getOrderDetailInfo} from './OrderDetailService'

export const getOrder = (raw) => {
    const length = raw.length;
    // var totalPrice = 0
    var listOrderDetail = [];
    for (var i = 0; i < length; ++i) {
        const orderDetail = getOrderDetail(raw[i]);
        // totalPrice += getTotalPrice(orderDetail);
        listOrderDetail.push(orderDetail)
    }
    // return new Order({totalPrice: totalPrice, orderDetails: listOrderDetail})
    return new Order({orderDetails: listOrderDetail});
};

export const getOrderInfo = (order) => {
    if (!order) return order;
    var orderInfo = [];
    for (var i = 0; i < order.length; ++i) {
        orderInfo.push(getOrderDetailInfo(order[i]));
    }
    return orderInfo;
};