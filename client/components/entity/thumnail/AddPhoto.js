import React from 'react'
import { Modal } from 'react-bootstrap'

import WebcamCapture from '~/containers/entity/thumnail/WebcamCapture'
import UploadCroppie from '~/containers/entity/thumnail/UploadCroppie'
import OneImage from '~/containers/entity/thumnail/OneImage'

class AddPhoto extends React.Component {
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
        const { TITLE, UPLOAD_PHOTO, TAKE_PHOTO, SUGGEST_PHOTO } = this.props
        return(
            <div>
                <OneImage style={{ width: 500, height: 170 }}
                    src="/images/garden.png"
                    onClick={() => this.open()}
                    textChange="Add photo"
                    isTop={true}
                />
                <Modal show={this.state.showModal} onHide={() => this.close()}>
                    <div className="modal-content"
                        style={{
                            marginTop: -4,position: 'fixed',
                            width: 790, marginLeft: -100 }} >
                        <Modal.Header>
                            <div onClick={() => this.close()} style={{ padding: 0, float: 'right'}}
                                className="btn btn-transperant">
                                <span className="glyphicon glyphicon-remove text-muted"></span>
                            </div>
                            <strong>{TITLE}</strong>
                        </Modal.Header>
                        <Modal.Body style={{ padding: 8 }}>
                            <div className="container-fluid" style={{ width: 784 }}>
                                <div className="row">
                                    <div className="col col-xs-6" style={{ padding: 0}}>
                                        <UploadCroppie
                                            TITLE="Upload Photo"
                                            src="/images/flower005.jpg"
                                            style={{ width: 780, height: 440 }}
                                            btnstyle={{
                                                width: 380,
                                                height: 110,
                                                fontSize: 17,
                                            }}
                                        />
                                    </div>
                                    <div className="col col-xs-6" style={{ padding: 0}}>
                                        <WebcamCapture
                                            TITLE='Take Photo'
                                            DESCRIPTION='Your current profile picture is always public.'
                                            CAPTURE_PHOTO='Capture Photo'
                                            RETAKE_PHOTO='Retake Photo'
                                            SAVE='Save'
                                            style={{ width: 590 }}
                                            btnstyle={{
                                                width: 380,
                                                height: 110,
                                                fontSize: 17,
                                            }}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: 8 }}>
                                <span className="text-muted"
                                    fontSize={17}>{SUGGEST_PHOTO}</span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="btn btn-default btn-sm" onClick={() => this.close()}>Close</div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default AddPhoto
