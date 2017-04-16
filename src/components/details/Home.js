import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Row>
                    <Col xs={0} md={3}>
                    </Col>
                    <Col xs={6} md={6}>
                        <Panel>
                            Basic panel example
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}
