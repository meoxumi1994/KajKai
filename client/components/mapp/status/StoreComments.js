import React from 'react';
import { Row,Col } from 'react-bootstrap';

import Comment from './Comment';

const StoreComments = () => (
    <div>
        <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={8} md={8}>
                <div className="btn btn-transparent btn-xs">
                    <a>hiển thị comment trước</a>
                </div>
            </Col>
        </Row>
        <Comment/>
    </div>

)

export default StoreComments;
