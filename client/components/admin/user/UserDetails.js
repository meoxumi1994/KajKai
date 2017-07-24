import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { close } = this.props
        return (
          <Modal style={{ marginTop: 120 }} show={false} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title>  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  FUCK THIEN
              </Modal.Body>
              <Modal.Footer>
                  <button className="btn btn-primary">Save</button>
                  <button className="btn" onClick={() => close()}>Close</button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default UserDetails
