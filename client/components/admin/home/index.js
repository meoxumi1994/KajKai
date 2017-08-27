import React from 'react'
import DashboardContainer from '~/containers/admin/dashboard'
import UserContainer from '~/containers/admin/user'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { logout } = this.props

        return (
            <div className="container" style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: 100}}>
                <div style={{width: '15%', height: '100%', position: 'fixed', left: 0, backgroundColor: 'white'}}>
                    <div style={styles.left.leftHeader}>
                        <div style={{marginTop: 10}}>
                          <img src="./images-admin/kajkai.png" style={{width: 40, height: 40, marginRight: 10}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '100%', border: '0.1px solid #c6c6c6'}}>
                        <ul className="nav nav-tabs nav-pills" style={{width: '100%', height: '100%'}}>
                            <li style={styles.left.ul} className="active">
                                <a data-toggle="tab" href="#dashboard">Dashboard</a>
                            </li>
                            <li style={styles.left.ul}>
                                <a data-toggle="tab" href="#user">User</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{width: '85%', height: '100%', position: 'fixed', left: '15%', backgroundColor: 'white'}}>
                    <div className="tab-content" style={{width: '100%', height: '100%'}}>
                          <div id="dashboard" className="tab-pane fade in active" style={styles.center.mainDiv}>
                              <div style={styles.center.header}>
                                  <div style={{marginTop: 12}}>
                                      <img src="./images-admin/details.png" style={{width: 30, height: 30, marginRight: 10}}/>
                                      <label style={{fontSize: 15, marginTop: 5}}> DASHBOARD </label>
                                      <button style={{float: 'right', marginRight: 30}} className="btn btn-default" onClick={() => logout()}>
                                            Logout
                                      </button>
                                  </div>
                              </div>
                              <DashboardContainer/>
                          </div>
                          <div id="user" className="tab-pane fade" style={styles.center.mainDiv}>
                              <div style={styles.center.header}>
                                  <div style={{marginTop: 12}}>
                                      <img src="./images-admin/avatar.png" style={{width: 35, height: 35, marginRight: 10}}/>
                                      <label style={{fontSize: 15, marginTop: 5}}> USER </label>
                                      <button style={{float: 'right', marginRight: 30}} className="btn btn-default" onClick={() => logout()}>
                                            Logout
                                      </button>
                                  </div>
                              </div>
                              <UserContainer/>
                          </div>
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    left: {
        ul: {
            width: '100%',
        },
        leftHeader: {
            width: '100%',
            height: '8%',
            textAlign: 'center',
            border: '0.1px solid #c6c6c6'
        },
    },
    center: {
        mainDiv: {
            width: '100%',
            height: '100%'
        },
        header: {
            width: '100%',
            height: '8%',
            textAlign: 'center',
            border: '0.1px solid #c6c6c6'
        }
    }
}

export default Home
