import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Settings extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      const { mesId, user, chatListMap } = this.props
      const { close, changeGroupName, editing } = this.props
      const { usersKey, usersMap, displayLabel, display } = chatListMap[mesId]

      const show = display.setting
      let groupName = ''

      return(
          <div>
              <Modal style={{ marginTop: 120 }} show={show} onHide={() => close(mesId)}>
                  <Modal.Header closeButton>
                  <Modal.Title><label>Conversation Setting</label></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div>
                      <form onSubmit={ (e) => {
                          e.preventDefault()
                          if (groupName.value && groupName.value.trim() != '') {
                              changeGroupName(mesId, user.id, groupName.value)
                              groupName.value = ''
                          }
                      }}>
                          <table className="table">
                              <tbody className="default-thead">
                                  <tr style={{height: 50}}>
                                      <th style={{width: 200}}>Label</th>
                                      {
                                          display.editingLabel?
                                          <td>
                                              <input ref={ref => groupName = ref} className="from-control"/>

                                              <ul style={{float: 'right'}} className="list-unstyled">
                                                  <li><button type="submit" style={{width: 70}} className="btn btn-success">Save</button></li>
                                                  <li><button type="button" onClick={() => editing(mesId)} style={{width: 70, marginTop: 5}} className="btn btn-danger">Cancel</button></li>
                                              </ul>


                                          </td>
                                          :
                                          <td>
                                              <label>{displayLabel}</label>
                                              <button type="button" onClick={() => editing(mesId)} style={{position: 'absolute', right: 20, width: 70}} className="btn btn-default">Edit</button>
                                          </td>
                                      }
                                  </tr>
                                  <tr>
                                      <th>Members</th>
                                      <td>
                                          <div>
                                          {
                                            usersKey.map( memberId =>
                                              <div key={memberId}>
                                                  <img src={usersMap[memberId].avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginBottom: 5, marginRight: 5}}/>
                                                  <label>{usersMap[memberId].username}</label>


                                                  <button className="btn btn-default" style={{float: 'right', width: 70}}>
                                                      <Link to="chart" target="_blank" to={"https://www.kajkai.com/user/" + memberId} >
                                                          View
                                                      </Link>
                                                  </button>

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
