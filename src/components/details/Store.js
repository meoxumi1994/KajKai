import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock, Form, Panel , Row, Col} from 'react-bootstrap';

var that
export default class Store extends React.Component {
    constructor(props){
        super(props)
        that = this
    }
    render(){
        return (
            <div>
                <Row>
                    <Col xs={6} md={6}>
                        <h3 className="text-center">Store</h3>
                        <div className="text-center">
                            <img src="/config/kaikai_hello.png" alt="Cinque Terre" width="70%"/>
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3>Store</h3>
                    </Col>
                </Row>
            </div>
        )
    }
    componentDidMount(){
        window.$.ajax({
            url: '/store',
            success: function(data){
                console.log(data);
            }
        })
    }
}
