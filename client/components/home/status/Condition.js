import React from 'react';
import { Row,Col,OverlayTrigger,Tooltip } from 'react-bootstrap';

const tooltipPeoPle = (
  <Tooltip id="tooltip">
      <div>tran van a</div>
      <div>tran van b</div>
      <div>tran van c</div>
      <div>...</div>
  </Tooltip>
);

const Condition = () => (
    <Row>
        <Col xs={3} md={3}>
            <div className="btn btn-transparent btn-xs">
                <img src="/images/like.svg" alt="Cinque Terre" width="18" height="22"/>
                {" "}Like
            </div>
            <div className="btn btn-transparent btn-xs">
                {" "}
                <OverlayTrigger placement="top" overlay={tooltipPeoPle}>
                    <a>139</a>
                </OverlayTrigger>
            </div>
        </Col>
        <Col xs={4} md={4}>
            <div className="btn btn-transparent btn-xs">
                <img src="/images/comment.svg" alt="Cinque Terre" width="18" height="22"/>
                {" "}Comment
            </div>
            <div className="btn btn-transparent btn-xs">
                {" "}
                <OverlayTrigger placement="top" overlay={tooltipPeoPle}>
                    <a>21</a>
                </OverlayTrigger>
            </div>
        </Col>
        <Col xs={4} md={4}>
            <div className="btn btn-transparent btn-xs">
                <img src="/images/share.svg" alt="Cinque Terre" width="18" height="22"/>
                {" "}Share
            </div>
            <div className="btn btn-transparent btn-xs">
                {" "}
                <OverlayTrigger placement="top" overlay={tooltipPeoPle}>
                    <a>123</a>
                </OverlayTrigger>
            </div>
        </Col>
    </Row>
)

export default Condition;
