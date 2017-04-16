import React from 'react';
import {} from 'react-bootstrap';

import Action from './Action'

const History = () => (
    <div className="container" style={{position: 'fixed'}}>
        <div className="panel panel-default" style={{ marginBottom: 0,padding: 0, width: 300}} >
            <div className="panel-body">
                lịch sử hoạt động
            </div>
            <hr style={{ margin: 0}}></hr>
            <Action/>
            <hr style={{ margin: 0}}></hr>
            <Action/>
            <hr style={{ margin: 0}}></hr>
            <Action/>
            <hr style={{ margin: 0}}></hr>
            <Action/>
            <hr style={{ margin: 0}}></hr>
            <Action/>
        </div>
    </div>
)

export default History;
