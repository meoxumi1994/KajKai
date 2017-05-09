import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import { flag } from '~/config/allIcon.js'


class PhoneInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code: '',
        }
    }
    handleChange(e){
        let newcode = e.target.value;
        if( newcode.length <= 4 ){
            this.setState({
                code: newcode
            })
        }
    }
    render(){
        let { g, open, close, isused, issuccess, newvalue } = this.props
        return(
            <Modal style={{ marginTop: 120 }} show={open} onHide={() => close()}>
                <Modal.Header closeButton>
                <Modal.Title>{g('CHECK')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>{newvalue}</div>
                    { isused?
                        <div>{g('PHONE_USED')}</div>
                      :issuccess?
                        <div>
                            {g('PHONE_VERIFY')}
                            <input type="text" style={{ display: 'inline' }} className="form-control input-sm"
                                style={{ width: 100 }} value={this.state.code}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                      :<div>{g('PHONE_FAILED')}</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => close()}>{g('CLOSE')}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PhoneInfo
