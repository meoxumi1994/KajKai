import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Small = (props) => (
    <div className="list-group-item" style={{ height: 90, paddingTop:3, paddingBottom: 3, paddingLeft: 0,paddingRight: 0 }}>
        <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}
            onClick = { ()=> props.changeScreenLeft() }
            >
            <img src="./images/avatastore.png" style={{ width: 70, height: 80 }}/>
        </div>
        <div style={{ marginLeft: 50}}>
            <div>StoreA 169 cầu giấy <small className="text-muted" > 5 mins ago</small></div>
            <div>
                <small className="text-muted" >phone: 091232143254</small>
            </div>
            <div>
                <small>hôm nay cửa hàng có hạ giá ạ</small>
            </div>
            <div>
                <small className="text-muted">Like{" "}<a>139</a></small>
                <small className="text-muted">{" "}Comment{" "}<a>21</a></small>
                <small className="text-muted">{" "}Share{" "}<a>123</a></small>
            </div>
        </div>
    </div>
)

export default Small;
