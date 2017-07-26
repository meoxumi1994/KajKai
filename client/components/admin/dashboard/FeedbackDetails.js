import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'

class FeedbackDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { current, mapp, auth,
                close, changePermission, save } = this.props

        if (mapp[current.id] == undefined) {
            return (
                <div></div>
            )
        }

        const { id, reporter, defendant, status, time } = mapp[current.id]
        let reason = ''

        return (
          <Modal style={{ marginTop: 120 }} show={current.display} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title><p>Feedback #{id}</p> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th>Reporter</th>
                              <td>
                                  <img src={reporter.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {reporter.user.username}
                                  <button className={reporter.ban.status? "btn btn-primary": "btn btn-danger"} style={{float: 'right'}} onClick={() => changePermission('reporter', current.id, !reporter.ban.status)}>
                                      {reporter.ban.status? "Activate": "Deactivate"}
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <th>Defendant</th>
                              <td>
                                  <img src={defendant.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {defendant.user.username}
                                  <button className={defendant.ban.status? "btn btn-primary": "btn btn-danger"} style={{float: 'right'}} onClick={() => changePermission('defendant', current.id, !defendant.ban.status)}>
                                      {defendant.ban.status? "Activate": "Deactivate"}
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <th>Content</th>
                              <td>{reporter.content}</td>
                          </tr>
                          <tr>
                              <th>Sellpost url</th>
                              <td><p><a href={'https://kajkai.com/sellpost/'+defendant.sellpostId}>Link</a></p></td>
                          </tr>
                          <tr>
                              <th>Time</th>
                              <td>{Date(time*1000)}</td>
                          </tr>
                          <tr>
                              <th>Reason</th>
                              <td>
                                  <FormControl onChange={(e) => reason = e.target.value} style={{height: 100}}
                                  placeholder="Admin decision" componentClass="textarea"/>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                  <button className="btn btn-primary" onClick={() => save(
                    { id: reporter.user.id,
                      status: reporter.ban.status },
                    { id: defendant.user.id,
                      status: defendant.ban.status },
                    auth.id,
                    reason)}>
                      Solve
                  </button>
                  <button className="btn" onClick={() => close()}>Close</button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default FeedbackDetails
