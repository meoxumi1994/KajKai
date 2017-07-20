import React from 'react'
import { Link } from 'react-router-dom'

class User extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { keyy, mapp,
                onDetails
              } = this.props
        return (
            <div style={{width: '100%', height: '100%', borderWidth: 1, borderStyle: 'solid'}}>
                <table className="table table-bordered">
                    <thead className="thead-default">
                        <tr style={styles.tr}>
                            <th>#</th>
                            {cols.map(col =>
                              <th key={col.label}>
                                  <img src={col.icon} style={styles.theadIcon}/>
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
                                    <Link to={"/user/"+id} >
                                        <img src={avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                                        {username}
                                    </Link>
                                  </td>
                                  <td>
                                      {
                                        stores.map(store =>
                                            <div key={store.id}>
                                                <Link to={"/store/"+store.id} >
                                                    <img src={store.avatarUrl} style={{width: 40, height: 40, marginRight: 10, marginBottom: 10, borderRadius: 50}}/>
                                                    {store.storename}
                                                </Link>
                                            </div>
                                        )
                                      }
                                  </td>
                                  <td>
                                    {email}
                                  </td>
                                  <td>
                                      {status? 'Activated': 'Deactived'}
                                  </td>
                                  <td>
                                      { status? <button className="btn btn-danger">Disable</button> : <button className="btn btn-primary">Enable</button> }
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
        label: "USER"
    },
    {
        icon: "./images/admin/store.png",
        label: "STORES"
    },
    {
        icon: "./images/admin/email.png",
        label: "EMAIL"
    },
    {
        icon: "./images/admin/status.png",
        label: "STATUS"
    },
    {
        icon: "./images/admin/action.png",
        label: "ACTION"
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
