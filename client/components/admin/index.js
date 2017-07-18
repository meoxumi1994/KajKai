import React from 'react'
import DashboardContainer from '~/containers/admin/dashboard'
import UserContainer from '~/containers/admin/user'
import StoreContainer from '~/containers/admin/store'

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: 100}}>
                <div style={{width: '15%', height: '100%', position: 'fixed', left: 0}}>
                    <div style={styles.left.leftHeader}><h4>KAJKAI ADMINSTRATION</h4></div>
                    <div style={{width: '100%', height: '100%', borderStyle: 'solid', borderWidth: 1}}>
                        <ul className="nav nav-tabs nav-pills" style={{width: '100%', height: '100%'}}>
                            <li style={styles.left.ul} >
                                <a data-toggle="tab" href="#dashboard">Dashboard</a>
                            </li>
                            <li style={styles.left.ul} className="active">
                                <a data-toggle="tab" href="#user">User</a>
                            </li>
                            <li style={styles.left.ul} >
                                <a data-toggle="tab" href="#store">Store</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{width: '85%', height: '100%', position: 'fixed', left: '15%'}}>
                    <div className="tab-content" style={{width: '100%', height: '100%'}}>
                          <div id="dashboard" className="tab-pane fade " style={styles.center.mainDiv}>
                              <div style={styles.center.header}><h4>Dashboard</h4></div>
                              <DashboardContainer/>
                          </div>
                          <div id="user" className="tab-pane fade in active" style={styles.center.mainDiv}>
                              <div style={styles.center.header}><h4>User</h4></div>
                              <UserContainer/>
                          </div>
                          <div id="store" className="tab-pane fade" style={styles.center.mainDiv}>
                              <div style={styles.center.header}><h4>Store</h4></div>
                              <StoreContainer/>
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
            height: '10%',
            textAlign: 'center',
            borderStyle: 'solid',
            borderWidth: 1
        },
    },
    center: {
        mainDiv: {
            width: '100%',
            height: '100%'
        },
        header: {
            width: '100%',
            height: '10%',
            textAlign: 'center',
            borderStyle: 'solid',
            borderWidth: 1,
        }
    }
}

export default Admin
