import React from 'react'

import { Modal } from 'react-bootstrap'

class WarningModal extends React.Components {
    constructor(props){
        super(props)
    }
    render(){
        const { showModal, close, content } = this.props
        return(
            <Modal bsSize="small" show={showModal} onHide={() => close()}>
                <div>
                    {content}
                </div>
            </Modal>
        )
    }
}

export default WarningModal
