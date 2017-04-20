import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Action = () => (
    <div className="list-group-item" style={{ paddingTop:3, paddingBottom: 3, paddingLeft: 0,paddingRight: 0 }}>
        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
            <img src="./images/avatar.png" width="33" height="33"/>
        </div>
        <div style={{ marginLeft: 40}}>
            <div>a đã like và gọi hàng tại <a>StoreA</a> : "1 bánh mỳ trứng ...</div>
            <small className="text-muted" >5 mins</small>
        </div>
    </div>
)

export default Action;
