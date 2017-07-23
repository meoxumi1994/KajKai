import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Comment = () => (
    <Row>
        <Col xs={1} md={1}>
            <img src="/images/avatar.png" alt="Cinque Terre" width="37" height="37"/>
        </Col>
        <Col xs={11} md={11}>
            <div>comment comment comment comment comment comment comment comment comment</div>
            <div className="btn btn-transparent btn-xs text-primary"><a>Like</a></div>
            <div className="btn btn-transparent btn-xs text-primary"><a>Reply</a></div>
        </Col>
    </Row>
)

export default Comment;
