import React from 'react'
import { Modal } from 'react-bootstrap'

class VerifyPhone extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { VERIFY_PHONE, statePhone, onVerifyPhone, phone, code, onChangeCode,
            PHONE_FAILED, PHONE_USED, CONFIRM, CODE_FAILED,
            PHONE_VERIFY, CLOSE, showModal, close } = this.props
        return(
            <Modal show={showModal} onHide={() => close()} aria-labelledby="contained-modal-title-sm">
                <div className="modal-content">
                    <div style={{ padding: 10 }}>
                        {VERIFY_PHONE}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    {statePhone == 'UPDATE_PHONE_ING' &&
                        <div style={{ margin: 10 }}>
                            <div style={{ marginTop: 10 }} id="loaderr"></div>
                        </div>
                    }
                    {statePhone != 'UPDATE_PHONE_ING' &&
                        <div style={{ padding: '10px 10px 0px 10px'}}>{PHONE_VERIFY}</div>
                    }
                    {statePhone != 'UPDATE_PHONE_ING' &&
                        <div style={{ padding: 10 }}>
                            <input
                                onChange={(e) => onChangeCode(e)}
                                value={code}
                                placeholder={"enter code"+" ..."} style={{
                                fontSize: 15,
                                marginTop: 5,
                                paddingLeft: 5,}}/>

                            {statePhone == 'VERIFY_PHONE_ING' ?
                                <div style={{ marginTop: -20, marginLeft: 200 }} id="loaderr"></div>
                            :
                                <div className="btn btn-default btn-xs"
                                    onClick={() => onVerifyPhone(code)}
                                    style={{ marginLeft: 10 }}>
                                    {CONFIRM}
                                </div>
                            }
                            {statePhone == 'VERIFY_PHONE_FAILED' &&
                                <div style={{ padding: 5, color: 'red' }}>{CODE_FAILED}</div>
                            }
                        </div>
                    }

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
    }
}

export default VerifyPhone
