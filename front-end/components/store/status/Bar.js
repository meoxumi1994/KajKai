import React from 'react';
import { Row,Col,OverlayTrigger,Popover } from 'react-bootstrap';

const popoverSettingSmall = (
  <Popover id="popover-trigger-click-root-close">
      <div>report</div>
      <div>block</div>
      <div>follow</div>
  </Popover>
);

const Bar = () => (
    <Row>
        <Col xs={1} md={1}>
            <div className="btn btn-transparent btn-xs">
                <img src="./config/kajkai.png" alt="Cinque Terre" width="37" height="37"/>
            </div>
        </Col>
        <Col xs={6} md={8}>
            <div>
                Store A
            </div>
            <small className="text-muted">8 mins</small>
        </Col>
        <Col xs={2} md={2}>
            <div className="btn btn-transparent btn-xs">
                <img src="./config/ship.png" alt="Cinque Terre" width="40" height="25"/>
                {" "}<small className="text-muted">500m</small>
            </div>
        </Col>
        <Col xs={1} md={1}>
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverSettingSmall}>
                <img src="./config/settingSmall.png" alt="Cinque Terre" width="15" height="15"/>
            </OverlayTrigger>
        </Col>
    </Row>
)

export default Bar;
