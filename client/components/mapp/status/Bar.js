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
    <div>
        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
            <img src="/images/kajkai.svg" alt="Cinque Terre" width="37" height="37"/>
        </div>
        <div>
            Store A
        </div>
        <small className="text-muted">8 mins</small>
        <div className="btn btn-transparent btn-xs">
            <img src="/images/ship.png" alt="Cinque Terre" width="40" height="25"/>
            {" "}<small className="text-muted">500m</small>
        </div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverSettingSmall}>
            <img src="/images/settingSmall.svg" alt="Cinque Terre" width="15" height="15" style={{ float: 'right'}}/>
        </OverlayTrigger>
    </div>
)

export default Bar;
