import React from 'react'

import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Warning extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { kind, show, onChange, content, WARNING_MODAL, BAN_REASON_1, CLOSE,
            BAN_REASON_2, NOT_LOGIN, GO_LOGIN, WELCOME_TO_KAJKAI} = this.props
        if(kind == 'ban'){
            return (
                <Modal bsSize="small" show={show} onHide={() => onChange('show', false)}>
                    <div style={{ padding: 10, fontSize: 17, color: 'white', backgroundColor: '#BD081C', borderRadius: '5px 5px 0px 0px'}}>
                        {WARNING_MODAL}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <img style={{ width: '100%' }} src="/images/world.svg"/>
                    <div style={{ padding: 10, fontSize: 14 }}>
                        <span style={{ fontWeight: 'bold', color: '#787B80'}}>{BAN_REASON_1}</span>
                        <span style={{ fontWeight: 'bold', color: '#787B80'}}>{content}</span>
                        <span style={{ fontWeight: 'bold', color: '#787B80'}}>{BAN_REASON_2}</span>
                    </div>
                    <hr style={{ margin: 0 , marginTop: 100, }}/>
                    <div style={{ height: 50,  padding: 10 }}>
                        <div className="btn btn-default btn-sm"
                            onClick={() => onChange('show', false)}
                            style={{ float: 'right' }}>
                            {CLOSE}
                        </div>
                    </div>
                </Modal>
            )
        }
        return(
            <Modal bsSize="small" show={show} onHide={() => onChange('show', false)}>
                <div style={{ padding: 10, fontSize: 17, color: 'white', backgroundColor: '#BD081C', borderRadius: '5px 5px 0px 0px'}}>
                    {WELCOME_TO_KAJKAI}
                </div>
                <hr style={{ margin: 0 }}/>
                <img style={{ width: '100%' }} src="/images/world.svg"/>
                <div style={{ padding: 10 }}>
                    <div style={{ fontWeight: 'bold', color: '#787B80'}}>{NOT_LOGIN}</div>
                    <Link to="/register">
                        <div className="btn btn-default btn-sm" style={{ marginTop: 300, color: '#3B5998', fontSize: 13 }}
                            onClick={() => onChange('show', false)}>
                            {GO_LOGIN}
                        </div>
                    </Link>
                </div>
            </Modal>
        )
    }
}

export default Warning
