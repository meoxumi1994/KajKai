import { connect } from 'react-redux'
import Home from '~/components/admin/home/'
import { auth, logout } from '~/actions/asyn/admin/login/restful'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => {
        dispatch(logout())
    }
})

const HomeContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Home)

export default HomeContainer
