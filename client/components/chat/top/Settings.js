import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Settings extends React.Component {

    render() {
      const { mesId, user, chatListMap } = this.props
      const { close, changeGroupName, removeUser } = this.props
      const { usersKey, usersMap } = chatListMap[mesId]
      const show = chatListMap[mesId].display.setting
      let groupName = ''
      return(
          <div>
              <Modal style={{ marginTop: 120 }} show={show} onHide={() => close(mesId)}>
                  <Modal.Header closeButton>
                  <Modal.Title> Setting </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div>
                      <form onSubmit={ (e) => {
                          e.preventDefault()
                          if (groupName.value && groupName.value.trim() != '') {
                              changeGroupName(mesId, user.id, groupName.value)
                          }
                      }}>
                          <table>
                              <tbody>
                                  <tr>
                                      <td style={{width: 200}}>Group name</td>
                                      <td>
                                          <input ref={ref => groupName = ref} className="from-control"/>
                                          <button style={{position: 'absolute', right: 50}} className="btn">Save</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Group color</td>
                                      <td>
                                          <button type="button" className="btn" style={{backgroundColor: '#cc3333', color: 'white'}}>Red</button>
                                          <button type="button"  style={{position: 'absolute', right: 50}} className="btn">Change</button>
                                      </td>
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
                                                  {
                                                      usersMap[memberId].disabled?
                                                      <button
                                                            type="button"
                                                            disabled={true}
                                                            className="btn"
                                                            style={{position: 'absolute', right: 50, marginBottom: 10}}>
                                                            Removed
                                                      </button>
                                                      :
                                                      <button
                                                            type="button"
                                                            onClick={() => removeUser(mesId, user.id, memberId)}
                                                            className="btn btn-danger"
                                                            style={{position: 'absolute', right: 50, marginBottom: 10}}>
                                                            Remove
                                                      </button>
                                                  }
                                              </div>
                                            )}
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          </form>
                      </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button type="button" onClick={() => close(mesId)}>CLOSE</Button>
                  </Modal.Footer>
              </Modal>
          </div>
      )

    }

}

export default Settings
