import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'

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
                              <th>Reporter</th>
                              <td>
                                  <img src={reporter.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {reporter.username}
                                  <button className="btn btn-danger" style={{float: 'right'}}>
                                      Disable
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <th>Defendant</th>
                              <td>
                                  <img src={defendant.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {defendant.username}
                                  <button className="btn btn-danger" style={{float: 'right'}}>
                                      Disable
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <th>Url</th>
                              <td><a href="google.com">Link</a></td>
                          </tr>
                          <tr>
                              <th>Reason</th>
                              <td>{reason}</td>
                          </tr>
                          <tr>
                              <th>Time</th>
                              <td>{time}</td>
                          </tr>
                          <tr>
                              <th>Decision</th>
                              <td>
                                  <FormControl style={{height: 100}} componentClass="textarea" placeholder="Please type decision" />
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                  <button className="btn btn-primary">Save</button>
                  <button className="btn" onClick={() => close()}>Close</button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default FeedbackDetails
