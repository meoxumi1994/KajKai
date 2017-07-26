import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'

class FeedbackDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { current, mapp, auth, details,
                close, changePermission, save } = this.props

        if (details == undefined) {
            return (
                <div></div>
            )
        }

        const { id, reporter, defendant, status, time, solvedTime, decision } = details

        let reason = ''
        return (
          <Modal style={{ marginTop: 120 }} show={current.display} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title><label>Feedback #{id}:</label><label style={{color: status? 'green': 'red', marginLeft: 10}}>{status? 'Solved': 'Unsolved'}</label></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th>Reporter</th>
                              <td>
                                  <img src={reporter.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {reporter.user.username}
                                  {
                                    status?
                                    <p style={{color: reporter.ban.status? 'red': 'green', float: 'right'}}>
                                        {reporter.ban.status? 'Deactivated': 'Activated'}
                                    </p>
                                    :
                                    <button className={reporter.ban.status? "btn btn-danger": "btn btn-success"} style={{float: 'right', width: 100}} onClick={() => changePermission('reporter', current.id, !reporter.ban.status)}>
                                        {reporter.ban.status? "Deactivated": "Activated"}
                                    </button>
                                  }
                              </td>
                          </tr>
                          <tr>
                              <th>Defendant</th>
                              <td>
                                  <img src={defendant.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                  {defendant.user.username}
                                  {
                                      status?
                                      <p style={{color: defendant.ban.status? 'red': 'green', float: 'right'}}>
                                          {defendant.ban.status? 'Deactivated': 'Activated'}
                                      </p>
                                      :
                                      <button className={defendant.ban.status? "btn btn-danger": "btn btn-success"} style={{float: 'right', width: 100}} onClick={() => changePermission('defendant', current.id, !defendant.ban.status)}>
                                          {defendant.ban.status? "Deactivated": "Activated"}
                                      </button>
                                  }
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
                              <th>Last updated</th>
                              <td>{Date(time*1000)}</td>
                          </tr>
                          <tr>
                              <th>Reason</th>
                              <td>
                                  {
                                      status? decision :
                                      <FormControl onChange={(e) => reason = e.target.value} style={{height: 100}}
                                      placeholder="Admin decision" componentClass="textarea"/>
                                  }

                              </td>
                          </tr>
                      </tbody>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                  {
                      status?
                      undefined
                      :
                      <button className="btn btn-primary" onClick={() => save(
                          auth.id,
                          reason,
                          id,
                          !status,
                          reporter.user.id,
                          reporter.ban.status,
                          defendant.user.id,
                          defendant.ban.status,
                      )}>
                          Save
                      </button>
                  }
                  <button className="btn" onClick={() => close()}>Close</button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default FeedbackDetails
