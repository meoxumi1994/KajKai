import React from 'react'
import { Link } from 'react-router-dom'
import UserDetailsContainer from '~/containers/admin/user/UserDetailsContainer'

class User extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { keyy, mapp, adminId,
                onDetails, disable
              } = this.props
        return (
            <div style={{width: '100%', height: '100%', borderWidth: 1, borderStyle: 'solid'}}>
                <UserDetailsContainer/>
                <table className="table table-bordered">
                    <thead className="thead-default">
                        <tr style={styles.tr}>
                            <th>#</th>
                            {cols.map(col =>
                              <th key={col.label}>
                                  {col.label}
                              </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {keyy.map(
                          (userId, index) => {
                            const { id, username, avatarUrl, status, email, stores } = mapp[userId]
                            return (
                              <tr key={userId}>
                                  <th scope="row">{index+1}</th>
                                  <td>
                                      <img src={avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                                      {username}
                                  </td>
                                  <td>
                                      {
                                        stores.map(store =>
                                          <div key={store.id}>
                                                  <img src={store.avatarUrl} style={{width: 40, height: 40, marginRight: 10, marginBottom: 10, borderRadius: 50}}/>
                                                  {store.storename}
                                          </div>
                                        )
                                      }
                                  </td>
                                  <td>
                                    {email}
                                  </td>
                                  <td>
                                      {status? 'Deactived': 'Activated'}
                                  </td>
                                  <td>
                                      { status? <button className="btn btn-primary" onClick={() => disable(false, adminId, userId, 'Thien gay')}>Enable</button> : <button className="btn btn-danger" onClick={() => disable(true, adminId, userId, 'Thien gay')}>Disable</button> }
                                  </td>
                              </tr>
                            )
                          }
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}

const cols = [
    {
        icon: "./images/admin/avatar.png",
        label: "User"
    },
    {
        icon: "./images/admin/store.png",
        label: "Stores"
    },
    {
        icon: "./images/admin/email.png",
        label: "Email"
    },
    {
        icon: "./images/admin/status.png",
        label: "Status"
    },
    {
        icon: "./images/admin/action.png",
        label: "Action"
    },
]

const styles = {
    theadIcon: {
      width: 40,
      height: 40,
      marginRight: 10
    },
}

export default User
