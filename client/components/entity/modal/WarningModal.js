import React from 'react'

import { Modal } from 'react-bootstrap'

class WarningModal extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { showModal, close, content, WARNING_MODAL } = this.props
        return(
            <Modal show={showModal} onHide={() => close()}>
                <div style={{ padding: 10, fontSize: 14.5, fontWeight: 'bold'}}>
                    {WARNING_MODAL}
                </div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: 10 }}>
                    {content}
                </div>
            </Modal>
        )
    }
}

export default WarningModal
