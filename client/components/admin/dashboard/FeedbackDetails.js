import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class FeedbackDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { current, mapp,
                close } = this.props

        if (mapp[current.id] == undefined) {
            return (
                <div></div>
            )
        }

        const { reporter, defendant, reason, time, status } = mapp[current.id]

        return (
          <Modal style={{ marginTop: 120 }} show={current.display} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title> {reporter.username} </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th>Requester</th>
                              <td>
                                  <img src={reporter.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {reporter.username}
                              </td>
                          </tr>
                          <tr>
                              <th>Defendant</th>
                              <td>
                                  <img src={defendant.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {defendant.username}
                              </td>
                          </tr>
                          <tr>
                              <th>Reason</th>
                              <td>{reason}</td>
                          </tr>
                          <tr>
                              <th>Time</th>
                              <td>{time}</td>
                          </tr>
                      </tbody>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-danger">Disable User</button>
                <button className="btn btn-primary">Send Message</button>
                <Button onClick={() => close()}>CLOSE</Button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default FeedbackDetails
