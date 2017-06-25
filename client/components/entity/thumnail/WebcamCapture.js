import React from 'react'
import { Modal } from 'react-bootstrap'
import Webcam from 'react-webcam'

class WebcamCapture extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            click_capture : false,
            iswaitting: false,
            cowndown: undefined,
            showModal: false,
        }
    }
    capture(){
        if(this.state.iswaitting) return;
        this.setState({
            iswaitting: true,
            cowndown: 3,
        })
        const myInterval = setInterval(() => {
            this.setState({
                cowndown: this.state.cowndown - 1,
            })
            if(this.state.cowndown == 0){
                clearInterval(myInterval)
                this.setState({
                    click_capture: true,
                    iswaitting: false,
                    cowndown: undefined,
                })
                const imageSrc = this.webcam.getScreenshot()
                const imgData = document.getElementById("imgData")
                imgData.src = imageSrc
            }
        },1000)
    }
    onSave(){
        if(this.state.iswaitting) return;
        console.log('onSave')
    }
    close(){
        this.setState({ showModal: false })
    }
    open(){
        this.setState({
            click_capture : false,
            iswaitting: false,
            cowndown: undefined,
            showModal: true
        })
    }
    render() {
        const { style, btnstyle, TAKE_PHOTO, WEBCAM_DESCRIPTION, CAPTURE_PHOTO, SAVE , RETAKE_PHOTO} = this.props
        return (
            <div>
                <button type="button" className="btn btn-default"
                    style={{ width: btnstyle.width, height: btnstyle.height ,
                        padding: 0, color: '#3B5998' }}
                    onClick={() => this.open()}>
                    <span style={{ fontSize: btnstyle.fontSize }} className="glyphicon glyphicon-camera"></span>
                    <span style={{ fontSize: btnstyle.fontSize }} >{" " + TAKE_PHOTO}</span>
                </button>
                <Modal show={this.state.showModal} onHide={() => this.close()}>
                    <div className="modal-content" style={{
                        marginTop: -4, position: 'fixed',
                        width: style.width + 16}}>
                        <Modal.Header>
                            <div onClick={() => this.close()} style={{ padding: 0, float: 'right'}}
                                className="btn btn-transperant">
                                <span className="glyphicon glyphicon-remove text-muted"></span>
                            </div>
                            <strong>{TAKE_PHOTO}</strong>
                            <div className="text-muted">{WEBCAM_DESCRIPTION}</div>
                        </Modal.Header>
                        <Modal.Body style={{ padding: 8 }}>
                            <Webcam
                              audio={false}
                              width={style.width}
                              height={style.width / 1.32}
                              ref={ (webcam) => this.webcam = webcam }
                              screenshotFormat="image/jpeg"
                            />
                            <div style={{
                                position: 'absolute',
                                // visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                marginTop: - style.width / 1.32 - 3,
                                paddingTop: 140,
                            }}>
                                <strong style={{
                                    marginLeft: style.width / 2,
                                    fontSize: 30,
                                    textShadow: '1px 1px 0px #000000',
                                    color: 'white'}}>
                                    {this.state.cowndown}
                                </strong>
                            </div>
                            <div style={{
                                position: 'absolute',
                                // visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                marginTop: - style.width / 1.32 - 3
                            }}>
                                <img id="imgData"
                                    style={{
                                        width: style.width,
                                        visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                    }}/>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            {this.state.click_capture?
                                <div>
                                    <div className="btn btn-sm btn-default"
                                        disabled={this.state.iswaitting}
                                            style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23',
                                            color: 'white' }}
                                        onClick={() => this.capture()}>{RETAKE_PHOTO}</div>
                                    {!this.state.iswaitting &&
                                        <button className="btn btn-sm btn-default"
                                                style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                                            onClick={() => this.onSave()}>
                                            {SAVE}</button>
                                    }
                                </div>
                            :    <div>
                                    <div className="btn btn-sm btn-default"
                                        disabled={this.state.iswaitting}
                                        style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                                        onClick={() => this.capture()}>{CAPTURE_PHOTO}</div>
                                </div>
                            }
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default WebcamCapture
