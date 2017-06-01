import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalUploadImage = ({ visibility, handleImageChange, close, uploadingImgs, sendImage, mesId }) => {
    return(
        <div>
            <Modal style={{ marginTop: 120 }} show={visibility}>
                <Modal.Header closeButton>
                <Modal.Title> Upload Avatar </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" onChange={(e) => handleImageChange(e)}/>
                    {uploadingImgs.map(url => <img key={url} src={url} style={{witdh: 400, height: 400}} />)}
                </Modal.Body>
                <Modal.Footer>
                  <Button disabled={true}  onClick={() => sendImage(mesId, uploadingImgs)}>SEND</Button>
                  <Button onClick={() => close()}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadImage
