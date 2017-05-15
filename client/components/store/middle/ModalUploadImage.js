import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalUploadImage = ({ open, close, CLOSE, handleImageChange, handleUpload }) => {
    return(
        <div>
            <Modal style={{ marginTop: 120 }} show={open} onHide={() => close()}>
                <Modal.Header closeButton>
                <Modal.Title> Upload Avatar </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" onChange={(e) => handleImageChange(e)}/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => close()}>{CLOSE}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadImage
