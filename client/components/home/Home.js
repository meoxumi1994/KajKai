import React from 'react';

import Status from './status/Status';
import Advertisement from './Advertisement';
import MessageListContainer from '~/containers/chat/center/MessageListContainer'
import SendMessageContainer from '~/containers/chat/bottom/SendMessageContainer'
import { DropdownButton,  MenuItem, Grid, Row, Col  } from 'react-bootstrap'

const Home = () => (
    <div>
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

                </div>
            </div>
        </div>
    </div>
)



export default Home
