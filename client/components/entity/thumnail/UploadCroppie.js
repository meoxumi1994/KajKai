import React from 'react'
import { Modal } from 'react-bootstrap'

import Croppie from '~/containers/entity/thumnail/Croppie'

class UploadCroppie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cropper_src: "/images/flower001.jpg",
            showModal: false,
        }
    }
    onZoom(){
        this.refs.cropper.zoomTo(0.1)
    }
    onSave(){
        console.log(this.cropper.getCroppedCanvas().toDataURL())
    }
    uploadPhoto(){
        document.getElementById("myinput_file").click()
        document.getElementById("myinput_file").value = null
    }
    readURL(){
        const file = this.refs.imagefile.files[0];
        if(this.props.upNow){
            this.props.onLoadImage(action, file)
        }else{
            const reader = new FileReader();
            const url = reader.readAsDataURL(file);
            reader.onloadend = (e) => {
                this.setState({
                    cropper_src: reader.result,
                    showModal: true
                })
            }
        }
    }
    open(){
        this.setState({ showModal: true })
    }
    close(){
        this.setState({ showModal: false })
    }
    render() {
        const { style, CROPPIE_TITLE, btnstyle, upNow } = this.props
        return (
            <div>
                <button type="button" className="btn btn-default"
                    style={{ width: btnstyle.width, height: btnstyle.height ,
                        padding: 0, color: '#3B5998'}}
                    onClick={() => this.uploadPhoto()}
                    >
                    <span style={{ fontSize: btnstyle.fontSize}} className="glyphicon glyphicon-plus"></span>
                    <span style={{ fontSize: btnstyle.fontSize}} >{" " + CROPPIE_TITLE}</span>
                </button>
                <input
                    onChange={() => this.readURL()}
                    ref="imagefile"
                    style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    width: 0,
                    height: 0,
                }} accept="image/*" type="file" id="myinput_file"/>
                <Modal show={this.state.showModal} onHide={() => this.close()}>
                    <div className="modal-content" style={{
                        position: 'fixed', marginTop: -4,
                        width: style.width + 2, marginLeft: -85 }}>
                        <Modal.Header>
                            <strong>{CROPPIE_TITLE}</strong>
                        </Modal.Header>
                        <Croppie
                            cropper_src={this.state.cropper_src}
                            style={style}
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default UploadCroppie
