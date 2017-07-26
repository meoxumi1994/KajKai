import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'
import CustomizedToggle from './CustomizedToggle'

class FeedbackDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { display, mapp, auth, details,
                close, changePermission, save } = this.props

        if (details == undefined) {
            return (
                <div></div>
            )
        }
        const { id, reporter, defendant, status, time, solvedTime, decision } = details

        let reason = ''
        return (
          <Modal style={{ marginTop: 120 }} show={display.details} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title><label>Feedback #{id}:</label><label style={{color: status? 'green': 'red', marginLeft: 10}}>{status? 'Solved': 'Unsolved'}</label></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th><p style={styles.title}>Reporter</p></th>
                              <td>
                                  <img src={reporter.user.avatarUrl} style={styles.avatarImg}/>
                                  {reporter.user.username}
                                  {
                                    status?
                                    <p style={{color: reporter.ban.status? 'red': 'green', float: 'right'}}>
                                        {reporter.ban.status? 'Deactivated': 'Activated'}
                                    </p>
                                    :
                                    <CustomizedToggle status={reporter.ban.status} changePermission={changePermission} type="reporter" id={id}/>
                                  }
                              </td>
                          </tr>
                          <tr>
                              <th><p style={styles.title}>Defendant</p></th>
                              <td>
                                  <img src={defendant.user.avatarUrl} style={styles.avatarImg}/>
                                  {defendant.user.username}
                                  {
                                      status?
                                      <p style={{color: defendant.ban.status? 'red': 'green', float: 'right'}}>
                                          {defendant.ban.status? 'Deactivated': 'Activated'}
                                      </p>
                                      :
                                      <CustomizedToggle status={defendant.ban.status} changePermission={changePermission} type="defendant" id={id}/>
                                  }
                              </td>
                          </tr>
                          <tr>
                              <th><p style={styles.title}>Content</p></th>
                              <th><p style={styles.title}>{reporter.content}</p></th>
                          </tr>
                          <tr>
                              <th><p style={styles.title}>Sellpost url</p></th>
                              <th><p style={styles.title}><a href={'https://www.kajkai.com/sellpost/'+defendant.sellpostId}>Link</a></p></th>
                          </tr>
                          <tr>
                              <th><p style={styles.title}>Last updated</p></th>
                              <th><p style={styles.title}>{time}</p></th>
                          </tr>
                          <tr>
                              <th><p style={styles.title}>Decision</p></th>
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

const styles = {
    title: {
        marginTop: 5
    },
    avatarImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        marginTop: 2
    }
}

export default FeedbackDetails
