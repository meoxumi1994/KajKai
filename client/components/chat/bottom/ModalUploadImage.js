import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalUploadImage = ({ visibility,  imageList, mesId, isLoading, handleImageChange, close, sendImage }) => {
    return(
        <div>
            <Modal style={{ marginTop: 120 }} show={visibility}>
                <Modal.Header closeButton>
                <Modal.Title> Upload Avatar </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" onChange={(e) => handleImageChange(e)}/>
                    {  imageList.length > 0?
                      imageList.map(url => <img key={url.urlreal} src={url.urlreal} width="400" height="400"/>)
                      :
                      <div></div>
                    }
                </Modal.Body>
                <Modal.Footer>
                  <Button disabled={isLoading}  onClick={() => sendImage(mesId, imageList)}>SEND</Button>
                  <Button onClick={() => close()}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUploadImage
