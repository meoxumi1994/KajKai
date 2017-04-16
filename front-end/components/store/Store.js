import React from 'react';
import { Row,Col } from 'react-bootstrap';

import Status from './status/Status';

const Store = () => (
    <div style={{ margin: 0,padding: 8,overflow: 'scroll'}}>
        <div className="row no-gutters">
            <Col xs={0} md={2}>
            </Col>
            <Col xs={6} md={5}>
                <div style={{ height: 750}}>
                    <Status/>
                </div>
            </Col>
            <Col xsHidden smHidden md={2}>

            </Col>
            <Col xs={3} md={2}>

            </Col>
        </div>
    </div>
)

export default Store
