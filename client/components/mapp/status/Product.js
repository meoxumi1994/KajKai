import React from 'react';
import { Row,Col,OverlayTrigger,Popover } from 'react-bootstrap';

const popoverImageProduct = (
    <Popover id="popover-positioned-bottom" title="tên sản phẩm">
        <img src="./images/product.png" alt="Cinque Terre" width="200" height="200"/>
    </Popover>
);

const Product = () => (
    <Row style={{ marginLeft: 6}}>
        <Col xs={4} md={4}>
            tên sản phẩm
        </Col>
        <Col xs={2} md={2}>
            1 cái
        </Col>
        <Col xs={2} md={2}>
            100.000
        </Col>
        <Col xs={1} md={1}>
            <div className="btn btn-transparent btn-xs">
                <img src="./images/plus.png" alt="Cinque Terre" width="16" height="16"/>
            </div>
        </Col>
        <Col xs={1} md={1}>
        </Col>
        <Col xs={1} md={1}>
            <OverlayTrigger placement="bottom" overlay={popoverImageProduct}>
                <img src="./images/detailproduct.png" alt="Cinque Terre" width="16" height="16"/>
            </OverlayTrigger>
        </Col>
    </Row>
)

export default Product;
