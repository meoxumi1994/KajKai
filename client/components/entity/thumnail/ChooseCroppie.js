import React from 'react'
import { Modal } from 'react-bootstrap'

import Croppie from '~/containers/entity/thumnail/Croppie'

class ChooseCroppie extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            showModal: false
        })
    }
    open(){
        this.setState({ showModal: true })
    }
    close(){
        this.setState({ showModal: false })
    }
    render(){
        const { SAVE, CROPPIE_TITLE, src, style, imgstyle } = this.props
        return(
            <div>
                <div className="btn btn-transperant"
                    onClick={() => this.open()}
                    style={{ padding: 0}}>
                    <img src={src} style={{ width: imgstyle.width, height: imgstyle.height }}/>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.close()}>
                    <div className="modal-content"
                        style={{
                            marginTop: -4, position: 'fixed',
                            width: style.width + 2, marginLeft: -85 }}>
                        <Modal.Header closeButton>
                            <strong>{CROPPIE_TITLE}</strong>
                        </Modal.Header>
                        <Croppie
                            DESCRIPTION={'scroll to zoom in and zoom out'}
                            cropper_src={src}
                            style={style}
                            SAVE={'save'}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ChooseCroppie
