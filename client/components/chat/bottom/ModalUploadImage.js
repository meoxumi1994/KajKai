import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class ModalUploadImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { mapp, mesId, user,
                handleImageChange, sendImage, close} = this.props
        // console.log('mapp', mapp);
        const { display, imagesUrl } = mapp
        return(
            <div>
                <Modal style={{ marginTop: 120 }} show={display.imageModal} onHide={() => close(mesId)}>
                    <Modal.Header closeButton>
                    <Modal.Title> Send image </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file" onChange={(e) => handleImageChange(e, mesId)}/>
                        {
                          imagesUrl.length == 0? undefined:
                          imagesUrl.map(url =>
                              <img key={url} src={url} style={{maxWidth: 500, maxHeight: 500, marginTop: 20, display: 'block', margin: '0 auto'}}/>
                          )
                        }
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => sendImage(mesId, user.id, '', imagesUrl)}>SEND</Button>
                      <Button onClick={() => close(mesId)}>CLOSE</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalUploadImage
