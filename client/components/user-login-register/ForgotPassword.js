import React from 'react'
import { Modal } from 'react-bootstrap'

const checkEmail = (email) => {
    if(!email) return 'error'
    const ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if( !ismail ) return 'error'
    return null
}

class ForgotPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { show, email, EMAIL_NEED, onChange, DONE, FORGOT_PASSWORD, CLOSE, currentState,
            REGISTER_MODAL_EMAIL_WARNING, EMAIL_WARNING,
            PLEASE_GO_EMAIL_TO_CHECK } = this.props
        return(
            <div>
                <div onClick={()=> onChange('show', true)}
                    className="btn btn-xs" style={{ padding: 0}}><a>{FORGOT_PASSWORD}</a></div>
                <Modal show={show} onHide={() => onChange('show', false)} style={{ borderRadius: '3px 3px 0px 0px' }}>
                    <div style={{ padding: 10, fontSize: 14, fontWeight: 'bold', backgroundColor: '#F6F7F9'}}>
                        {EMAIL_NEED}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    {currentState == 'RESET_PASSWORD_ING' ?
                        <div style={{ padding: 10 }}>
                            <div style={{ marginLeft: 230 }} id="loaderr"></div>
                        </div>
                    : currentState == 'RESET_PASSWORD_SUCCESS' ?
                        <div style={{ padding: 10 }}>{PLEASE_GO_EMAIL_TO_CHECK}</div>
                    : currentState == 'RESET_PASSWORD_FAILED' ?
                        <div style={{ padding: 10 }}>{EMAIL_WARNING}</div>
                    :
                        <div style={{ padding: 10 }}>
                            <input
                                className="form-control input-md" type="text"
                                value={email}
                                onChange={(e) => onChange('email', e.target.value)}
                                placeholder={EMAIL_NEED}
                                style={{height: 40, textAlign: 'center'}}/>
                        </div>
                    }
                    <div style={{ height: 50 }}>
                        {currentState != 'RESET_PASSWORD_SUCCESS' ?
                            <div disabled={checkEmail(email)}
                                onClick={() => this.props.onReset(email)}
                                className="btn btn-default btn-sm" style={{ float: 'right', marginTop: 10, marginRight: 10 }}>
                                {DONE}
                            </div>
                        :   <div onClick={() => onChange('show', false)}
                                className="btn btn-default btn-sm" style={{ float: 'right', marginTop: 10, marginRight: 10 }}>
                                {CLOSE}
                            </div>
                        }
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ForgotPassword
