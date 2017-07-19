import React from 'react'

class User extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { keyy, mapp } = this.props
        console.log('keyy',keyy);
        return (
            <div style={{width: '100%', height: '100%', borderWidth: 1, borderStyle: 'solid'}}>
                <table>
                    <tbody>
                        <div>
                            <tr style={styles.th}>
                                <th style={styles.th}>No</th>
                                <th style={styles.th}>Username</th>
                                <th style={styles.th}>Email</th>
                                <th style={styles.th}>Status</th>
                                <th style={styles.th}>Action</th>
                                <th style={styles.th}>Details</th>
                            </tr>
                        </div>
                        {keyy.map(
                          (userId, index) => {
                            const { id, username, avatarUrl, status, email } = mapp[userId]
                            return (
                              <div key={userId}>
                                  <th style={styles.th}>{index+1}</th>
                                  <th style={styles.th}>{username}</th>
                                  <th style={styles.th}>{email}</th>
                                  <th style={styles.th}>
                                      {status? 'Activated': 'Deactived'}
                                  </th>
                                  <th style={styles.th}>
                                      { status? <button className="btn btn-danger">Disable</button> : <button className="btn btn-primary">Enable</button> }
                                  </th>
                                  <th style={styles.th}><button className="btn btn-default">Details</button></th>
                              </div>
                            )
                          }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
  th: {
    border: "1px solid black",
    width: 200,
    height: 70
  }
}

export default User
