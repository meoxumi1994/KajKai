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
                onUserDetails
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
                            const { user, ban, stores } = mapp[userId]
                            return (
                              <tr key={userId}>
                                  <th scope="row">{index+1}</th>
                                  <td>
                                      <img src={user.avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                                      {user.username}
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
                                    {user.email}
                                  </td>
                                  <td>
                                      <p style={{color: ban.status? 'red': 'green'}}><b>{ban.status? 'Deactivated': 'Activated'}</b></p>
                                  </td>
                                  <td>
                                        <button onClick={() => onUserDetails(user.id)} className="btn btn-default">Details</button>
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
