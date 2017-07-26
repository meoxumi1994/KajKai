import React from 'react'
import { Modal, ControlLabel, FormControl } from 'react-bootstrap'

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { mapp, current, auth,
                close, changePermission } = this.props

        if (current.id == '' || current.id == undefined) {
            return (
              <div></div>
            )
        }

        const { user, stores, ban } = mapp[current.id]
        let reason = ''
        return (
          <Modal style={{ marginTop: 120 }} show={current.display} onHide={() => close()}>
              <Modal.Header closeButton>
              <Modal.Title>
                    <img src={user.avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                    {user.username}
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="table">
                      <tbody>
                          <tr>
                              <th>Email</th>
                              <td>
                                  {user.email}
                              </td>
                          </tr>
                          <tr>
                              <th>Stores</th>
                              <td>
                                  {
                                    stores.length == 0?
                                    'No stores'
                                    :
                                    stores.map(store =>
                                        <div key={store.id}>
                                            <img src={store.avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                                            {store.storename}
                                        </div>)
                                  }
                              </td>
                          </tr>
                          <tr>
                              <th>Status</th>
                              <td>
                                  {
                                    <p style={{color: ban.status?'red': 'green'}}>
                                        {ban.status?'Deactived':'Activated'} by <b>{ban.admin.username}</b> because <b>{ban.reason}</b></p>
                                  }
                              </td>
                          </tr>
                          <tr>
                              <th>Reason</th>
                              <td>
                                  <FormControl onChange={(e) => reason = e.target.value} style={{height: 100}}
                                  placeholder={ban.status?'Why do you want to ACTIVATE user':'Why do you want to DEACTIVATE user'} componentClass="textarea"/>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                  <button onClick={() => reason == ''? console.log('blank'): changePermission(!ban.status, auth.id, user.id, reason)} className={ban.status?"btn btn-primary":"btn btn-danger"}>{ban.status?'Activate':'Deactivate'}</button>
                  <button className="btn" onClick={() => close()}>Close</button>
              </Modal.Footer>
          </Modal>
        )
    }
}

export default UserDetails
