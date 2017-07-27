import React from 'react'
import { Modal } from 'react-bootstrap'

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
                      <button className="btn btn-primary" onClick={() => imagesUrl.length == 0? undefined: sendImage(mesId, user.id, '', imagesUrl)}>SEND</button>
                      <button className="btn btn-default" onClick={() => close(mesId)}>CLOSE</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalUploadImage
