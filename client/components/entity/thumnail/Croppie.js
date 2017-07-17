import React from 'react'

import { Modal } from 'react-bootstrap'
import Cropper from 'react-cropper'

class Croppie extends React.Component {
    constructor(props){
        super(props)
    }
    onSave(){
        this.props.onLoadImage(this.props.action, this.cropper.getCroppedCanvas().toDataURL())
    }
    render(){
        const { SAVE, CROPPIE_DESCRIPTION, cropper_src, style, aspectRatio} = this.props
        return(
            <div>
                <Modal.Body style={{ padding: 0 }}>
                    <Cropper
                        ref={ cropper => this.cropper = cropper }
                        viewMode= {1}
                        dragMode= 'move'
                        src={cropper_src}
                        aspectRatio= {aspectRatio}
                        style={{
                            width: style.width,
                            height: style.height
                        }}
                        minContainerWidth = {style.width}
                        minContainerHeight =  {style.height}
                        guides = {true}
                        modal = {true}
                        cropBoxMovable = {false}
                        cropBoxResizable = {false}
                        background = {false}
                        autoCropArea = {1}
                    />
                    <div style={{ paddingLeft: 20 }}>
                        {CROPPIE_DESCRIPTION}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn btn-sm btn-default"
                        style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                        onClick={() => this.onSave()}>{SAVE}</div>
                </Modal.Footer>
            </div>
        )
    }
}

export default Croppie
