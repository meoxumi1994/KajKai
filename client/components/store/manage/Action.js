import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Action = () => (
    <div className="btn btn-transparent btn-xs">
        <Row className="no-gutters">
            <Col xs={1} sm={1}>
                <img src="./images/avatar.png" alt="Cinque Terre" width="35" height="35"/>
            </Col>
            <Col xs={10} sm={10}>
                <div>a đã like và gọi hàng tại Store A</div>
            </Col>
        </Row>
    </div>
)

export default Action;
