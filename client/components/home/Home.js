import React from 'react';
import { Row,Col } from 'react-bootstrap';

import Status from './status/Status';
import Advertisement from './Advertisement';
import History from './history/History';

const Home = () => (
    <div style={{ overflow: 'scroll', height: window.innerHeight - 46 }}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-0 col-md-2" style={{ padding: 0}}>
                </div>
                <div className="col-sm-6 col-md-5" style={{ padding: 0}}>
                    <div>
                        <Status/>
                        <Status/>
                    </div>
                </div>
                <div className="col-sm-3 col-md-2" style={{ padding: 0}}>
                    <Advertisement/>
                </div>
                <div className="col-sm-3 col-md-3" style={{ padding: 0}}>
                    <div className="row">
                        <div className="col-md-offset-3" style={{ padding: 0}}>
                            <History/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home
