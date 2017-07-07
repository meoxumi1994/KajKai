import React from 'react'
import { Modal } from 'react-bootstrap'

class VerifyPhone extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            code: '',
        }
    }
    onChangeCode(e){
        this.setState({
            code: e.target.value
        })
    }
    render(){
        const { VERIFY_PHONE, statePhone, PHONE_VERIFY, CLOSE, showModal, close } = this.props
        console.log('VerifyPhone', statePhone)
        return(
            <Modal show={showModal} onHide={() => close()} aria-labelledby="contained-modal-title-sm">
                <div className="modal-content">
                    <div style={{ padding: 10 }}>
                        {VERIFY_PHONE}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        <input
                            onChange={(e) => this.onChangeCode(e)}
                            value={this.state.code}
                            placeholder={"enter code"+" ..."} style={{
                            fontSize: 15,
                            marginTop: 5,
                            paddingLeft: 5,}}/>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ height: 44 }}>
                        <div className="btn btn-default btn-sm"
                            style={{ float: 'right', marginTop: 8, marginRight: 8  }}
                            onClick={() => close()}>
                            {CLOSE}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    componentDidMount(){
        // this.props.onVerifyPhone();
    }
}

export default VerifyPhone
