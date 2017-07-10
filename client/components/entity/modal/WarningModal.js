import React from 'react'

import { Modal } from 'react-bootstrap'

class WarningModal extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { showModal, close, content, WARNING_MODAL } = this.props
        return(
            <Modal bsSize="small" show={showModal} onHide={() => close()}>
                <div>
                    {WARNING_MODAL}
                </div>
                <hr style={{ margin: 0 }}/>
                <div>
                    {content}
                </div>
            </Modal>
        )
    }
}

export default WarningModal
