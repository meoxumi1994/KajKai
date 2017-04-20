import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Product = () => (
    <Row>
        <Col xs={4} md={4}>
            tên sản phẩm
        </Col>
        <Col xs={2} md={2}>
            3 cái
        </Col>
        <Col xs={2} md={2}>
            300.000
        </Col>
        <Col xs={1} md={1}>
            <div className="btn btn-transparent btn-xs">
                <img src="./images/(-).png" alt="Cinque Terre" width="16" height="16"/>
            </div>
        </Col>
        <Col xs={1} md={1}>
        </Col>
    </Row>
)

const Comment = () => (
    <Row>
        <Col xs={1} md={1}>
            <img src="./images/avatar.png" alt="Cinque Terre" width="37" height="37"/>
        </Col>
        <Col xs={11} md={11}>
            <Product/>
            <hr style={{margin: 0}}></hr>
            <div style={{ marginTop: 4 }}>
                <div className="input-group">
                    <input type="text" className="form-control input-md" placeholder="bình luận thêm ..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-md" type="button">
                            <i className="glyphicon glyphicon-camera"></i>
                        </button>
                        <button className="btn btn-default btn-md" type="button">
                            <i className="glyphicon glyphicon-ok"></i>
                        </button>
                    </span>
                </div>
            </div>
        </Col>
    </Row>
)

export default Comment;
