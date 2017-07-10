import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Settings extends React.Component {

    render() {

      const { mesId, userId, settings, usersKey, usersMap } = this.props
      const { displaySettings, changeGroupName, removeUser } = this.props

      return(
          <div>
              <Modal style={{ marginTop: 120 }} show={settings}>
                  <Modal.Header closeButton>
                  <Modal.Title> Setting </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div>
                          <table>
                              <tbody>
                                  <tr style={{marginTop: 20}}>
                                      <td style={{width: 200}}>Group name</td>
                                      <td><input className="from-control" value="My group" onChange={() => changeGroupName()}/></td>
                                  </tr>
                                  <tr>
                                      <td>Group color</td>
                                      <td><button className="btn" style={{backgroundColor: '#cc3333', color: 'white'}}>Red</button></td>
                                  </tr>
                                  <tr>
                                      <td>Group member</td>
                                      <td>
                                          <div>
                                          {
                                            usersKey.map(
                                              memberId => <div key={memberId}>
                                                  <img src={usersMap[memberId].avatarUrl} width="40" height="40"/>
                                                  <label>{usersMap[memberId].username}</label>
                                                  <button
                                                        onClick={() => removeUser(mesId, userId, memberId)}
                                                        className="btn btn-danger"
                                                        style={{position: 'absolute', right: 50, marginBottom: 10}}>
                                                        Remove
                                                  </button>
                                              </div>
                                            )}
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button>SEND</Button>
                    <Button onClick={() => displaySettings()}>CLOSE</Button>
                  </Modal.Footer>
              </Modal>
          </div>
      )

    }

}

export default Settings
