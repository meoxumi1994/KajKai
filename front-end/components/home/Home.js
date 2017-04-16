import React from 'react';
import { Row,Col } from 'react-bootstrap';

import Status from './status/Status';
import Advertisement from './Advertisement';
import History from './history/History';


const Home = () => (
    <div style={{ margin: 0,padding: 8,overflow: 'scroll', height: window.innerHeight - 50 }}>
        <div className="container-fluid">
            <div className="row no-gutters">
                <Col xs={0} md={2}>
                </Col>
                <Col xs={6} md={5}>
                    <div>
                        <Status/>
                        <Status/>
                    </div>
                </Col>
                <Col xsHidden smHidden md={2}>
                    <Advertisement/>
                </Col>
                <Col xs={3} md={2}>
                    <History/>
                </Col>
            </div>
        </div>
    </div>
)

export default Home
