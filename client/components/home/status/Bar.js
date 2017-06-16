import React from 'react';
import { Link } from 'react-router-dom';
import { Row,Col,OverlayTrigger,Popover } from 'react-bootstrap';

const popoverSettingSmall = (
  <Popover id="popover-trigger-click-root-close">
      <div>report</div>
      <div>block</div>
      <div>follow</div>
  </Popover>
);

const Bar = () => (
        <Row style={{ marginRight: 1 }}>
            <Col xs={1} md={1}>
                <Link to='/store'>
                    <div className="btn btn-transparent btn-xs">
                        <img src="./images/kajkai.svg" alt="Cinque Terre" width="37" height="37"/>
                    </div>
                </Link>
            </Col>

            <Col xs={6} md={8}>
                <div>
                    Store
                </div>
                <small className="text-muted">8 mins</small>
            </Col>

            <Col xs={2} md={2}>
                <div className="btn btn-transparent btn-xs">
                    <img src="./images/ship.png" alt="Cinque Terre" width="40" height="25"/>
                    {" "}<small className="text-muted">500m</small>
                </div>
                <Link to='/chat'>
                    <div className="btn btn-transparent btn-xs" style={{float:'right'}}>
                        <img src="./images/comment.svg" alt="Cinque Terre" width="22.5" height="27"/>
                    </div>
                </Link>
            </Col>
            <Col xs={1} md={1}>
                <div className="dropdown" style={{ width : 27}}>
                  <button className="btn btn-xs btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" >
                      <img src="./images/settingSmall.svg" alt="Cinque Terre" width="15" height="15"/>
                  </button>
                  <ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">
                      <li><a href="#">report</a></li>
                      <li><a href="#">block</a></li>
                      <li><a href="#">follow</a></li>
                  </ul>
                </div>
            </Col>
        </Row>
)

export default Bar;
