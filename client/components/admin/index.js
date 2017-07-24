import React from 'react'
import AdminLoginContainer from '~/containers/admin/login'
import Home from '~/components/admin/home'

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { auth } = this.props
        if (auth.status) {
            return (
                <Home/>
            )
        } else {
            return (
                <AdminLoginContainer/>
            )
        }
    }
}

export default Admin
