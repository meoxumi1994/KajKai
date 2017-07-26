import React from 'react'
import AdminLoginContainer from '~/containers/admin/login'
import HomeContainer from '~/containers/admin/home'

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { auth } = this.props
        console.log('auth', auth);
        if (auth.status) {
            return (
                <HomeContainer/>
            )
        } else {
            return (
                <AdminLoginContainer/>
            )
        }
    }

    componentDidMount() {
        this.props.checkAuth()
    }
}

export default Admin
