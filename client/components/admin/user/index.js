import React from 'react'
import { Link } from 'react-router-dom'
import UserDetailsContainer from '~/containers/admin/user/UserDetailsContainer'
import { link } from '~/components/admin/common/config'
import { Table } from 'react-bootstrap'

class User extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { keyy, mapp, adminId, display,
                onUserDetails, loadMore
              } = this.props
        return (
            <div style={{width: '100%', height: '95%', overflowY: 'scroll', borderWidth: 1, borderStyle: 'solid'}}>

                <nav className="navbar navbar-default">
                    <button onClick={() => loadMore(keyy.length)} style={{float: 'right', margin: '5px 10px 5px 5px'}} className="btn btn-default">{display.loadMore?'Load more':'Data is up to date'}</button>
                </nav>

                <Table striped bordered condensed hover style={{marginLeft: 20, marginRight: 20}}>
                    <thead className="thead-default">
                        <tr style={styles.tr}>
                            <th style={{textAlign: 'center'}}>#</th>
                            <th style={{textAlign: 'center', width: 300}}>
                                User
                            </th>
                            <th style={{textAlign: 'center', width: 300}}>
                                Store
                            </th>
                            <th style={{textAlign: 'center'}}>
                                Email
                            </th>
                            <th style={{textAlign: 'center'}}>
                                Status
                            </th>
                            <th style={{textAlign: 'center'}}>
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {keyy.map(
                          (userId, index) => {
                            const { user, ban, stores } = mapp[userId]
                            return (
                              <tr key={userId}>
                                  <th scope="row" style={{textAlign: 'center'}}>{index+1}</th>
                                  <td style={{marginLeft: 20}}>
                                      <img src={user.avatarUrl} style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}/>
                                      <a href={link.user(user.id)}>{user.username}</a>
                                  </td>
                                  <td style={{marginLeft: 20}}>
                                      {
                                        stores.length == 0?
                                        <p><i>(No store)</i></p>
                                        :
                                        stores.map(store =>
                                          <div key={store.id}>
                                                  <img src={store.avatarUrl} style={{width: 40, height: 40, marginRight: 10, marginBottom: 10, borderRadius: 50}}/>
                                                  <a href={link.store(store.url)}>{store.storename}</a>
                                          </div>
                                        )
                                      }
                                  </td>
                                  <td style={{textAlign: 'center'}}>
                                    {user.email}
                                  </td>
                                  <td style={{textAlign: 'center'}} onClick={() => onUserDetails(user.id)}>
                                      {
                                          ban.status?
                                          <img src='./images-admin/untick.png' style={{width: 20, height: 20}}/>
                                          :
                                          <img src='./images-admin/tick.png' style={{width: 25, height: 25}}/>
                                      }
                                  </td>
                                  <td style={{textAlign: 'center', width: 120}}>
                                        <button onClick={() => onUserDetails(user.id)} className="btn btn-default">Details</button>
                                  </td>
                              </tr>
                            )
                          }
                        )}
                    </tbody>
                </Table>
                <UserDetailsContainer/>
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
