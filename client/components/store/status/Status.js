import React from 'react';
import { Row,Col,Panel,Popover,OverlayTrigger,Button,Tooltip } from 'react-bootstrap';

import Comment from './Comment';
import BuyerComments from './BuyerComments';
import StoreComments from './StoreComments';
import Condition from './Condition';
import Image from './Image';
import Product from './Product';
import Bar from './Bar';

const Status = () => (
    <div className="panel panel-default" style={{ minWidth:500 }}>
        <div className="panel-body" style={{ padding: 0}}>
            <div style={{ padding: 5}}>
                    <Bar/>
                <div style={{ marginLeft: 7}}>
                    <h4>Sale</h4>
                    <Product/>
                    <Product/>
                    <h4>Product</h4>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Image/>
                    <hr style={{margin: 7}}></hr>
                    <Condition/>

                </div>
            </div>
            <hr style={{margin: 2}}></hr>
            <div style={{ backgroundColor : '#f6f7f9'}}>
                <div style={{ margin: 4}}>
                    <hr style={{ margin: 0}}></hr>
                    <StoreComments/>
                    <hr style={{margin: 0}}></hr>
                    <BuyerComments/>
                </div>
            </div>
        </div>
    </div>
)

export default Status
